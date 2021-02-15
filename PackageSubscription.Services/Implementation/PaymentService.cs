using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PackageSubscription.Services.Interface;
using PackageSubscription.Services.Utils;
using PackageSubscription.Shared.DataResponse;
using PackageSubscription.Shared.Dtos;
using PayPalCheckoutSdk.Orders;
using Order = PayPalCheckoutSdk.Orders.Order;

namespace PackageSubscription.Services.Implementation
{
    public class PaymentService : IPaymentService
    {
        private readonly IConfiguration _configuration;
        private readonly IPackageService _packageService;

        private readonly ILogger<PaymentService> _logger;

        public PaymentService(IConfiguration configuration,
            IPackageService packageService,
            ILogger<PaymentService> logger)
        {
            _configuration = configuration;
            _packageService = packageService;
            _logger = logger;
        }

        public async Task<DataResponse<string>> CreatePayment(int userId, int packageId, int subscriptionType, decimal amount)
        {
            try
            {
                var order = new OrderRequest
                {
                    CheckoutPaymentIntent = "CAPTURE",
                    PurchaseUnits = new List<PurchaseUnitRequest>
                    {
                    new PurchaseUnitRequest
                    {
                        AmountWithBreakdown = new AmountWithBreakdown
                        {
                            Value = 100.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture),
                            CurrencyCode = "EUR",
                        }
                    }
                },
                    ApplicationContext = new ApplicationContext
                    {
                        ReturnUrl = _configuration["PayPal:SuccessUrl"],
                        CancelUrl = _configuration["PayPal:FailUrl"]
                    }
                };

                var request = new OrdersCreateRequest();
                request.Prefer("return=representation");
                request.RequestBody(order);

                var responsepp = await PayPalClient.Client(_configuration["PayPal:ClientId"], _configuration["PayPal:ClientSecret"]).Execute(request);

                var result = responsepp.Result<Order>();

                var response = new DataResponse<string>
                {
                    Data = result.Links.FirstOrDefault(link => link.Rel.Equals("approve"))?.Href,
                    Succeeded = true
                };

                var subscribeModel = new PackageSubscribeDto
                {
                    Id = 0,
                    UserId = userId,
                    PackageId = packageId,
                    SubscriptionType = subscriptionType,
                    Amount = amount,
                    PaymentId = result.Id
                };

                _packageService.SubscribeForPackage(subscribeModel);

                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"On create paypal payment: Exception thrown with error {ex.Message}");
                throw new ApplicationException("Due to technical issues we are not able to create the payment!");
            }
        }

        public async Task<DataResponse<Order>> CapturePayPalPayment(string token, string payerId)
        {
            var response = new DataResponse<Order>() { Succeeded = false, Data = null };

            try
            {
                var request = new OrdersCaptureRequest(token);
                request.RequestBody(new OrderActionRequest());

                var httpResponse = await PayPalClient.Client(_configuration["PayPal:ClientId"], _configuration["PayPal:ClientSecret"]).Execute(request);

                if (httpResponse.StatusCode == System.Net.HttpStatusCode.Created)
                {
                    var order = httpResponse.Result<Order>();

                    var saved = _packageService.MarkSubscriptionAsPayed(order.Id);

                    if (saved)
                    {
                        response.Succeeded = true;
                        response.Data = order;
                    }
                    else
                    {
                        _logger.LogError($"PayPal Payment capture failure, Status: '{httpResponse.StatusCode}'");
                        response.ErrorMessage = "Update subscription payment statys failed";
                    }
                }
                else
                {
                    _logger.LogError($"PayPal Payment capture failure, Status: '{httpResponse.StatusCode}'");
                    response.ErrorMessage = "PayPal payment couldn't be captured, please contact administrators!";
                }

                return response;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"On capture paypal payment: Exception thrown with error {ex.Message}");
                response.ErrorMessage = "Due to technical issues we are not able to capture the paypal payment";
            }

            return response;
        }
    }
}
