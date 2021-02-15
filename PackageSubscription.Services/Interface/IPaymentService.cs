using System.Threading.Tasks;
using PackageSubscription.Shared.DataResponse;
using PayPalCheckoutSdk.Orders;

namespace PackageSubscription.Services.Interface
{
    public interface IPaymentService
    {
        Task<DataResponse<string>> CreatePayment(int userId, int packageId, int subscriptionType, decimal amount);
        Task<DataResponse<Order>> CapturePayPalPayment(string token, string payerID);
    }
}
