using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PackageSubscription.Services.Interface;

namespace PackageSubscription.Web.Controllers.Api
{
    public class PaymentController : Controller
    {
        private readonly IPaymentService _paymentService;

        public PaymentController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpGet("Api/CreatePayment")]
        public async Task<IActionResult> CreatePayment([FromQuery] int userId, [FromQuery] int packageId, [FromQuery] int subscriptionType, [FromQuery] decimal amount)
        {
            try
            {
                var response = await _paymentService.CreatePayment(userId, packageId, subscriptionType, amount);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest("Payment failed!");
            }

        }

        [HttpGet("Api/PaymentSuccess")]
        [AllowAnonymous]
        public async Task<IActionResult> PaymentSuccess(string token, string payerId)
        {
            try
            {
                var response = await _paymentService.CapturePayPalPayment(token, payerId);
                if (response.Succeeded)
                {
                    var urlSuccess = new Uri(this.Request.Scheme + "://" + this.Request.Host.Value + "/payment-success");
                    return Redirect(urlSuccess.ToString());
                }

                var url = new Uri(this.Request.Scheme + "://" + this.Request.Host.Value + "/payment-fail");
                return Redirect(url.ToString());
            }
            catch (Exception e)
            {
                return BadRequest("Resources.InternalServerError");
            }
        }

        [HttpGet("Api/PaymentFail")]
        [AllowAnonymous]
        public IActionResult PaymentFail()
        {
            try
            {
                var url = new Uri(Request.Scheme + "://" + Request.Host.Value + "/payment-fail");
                return Redirect(url.ToString());
            }
            catch (Exception e)
            {
                return BadRequest("Resources.InternalServerError");
            }
        }
    }
}