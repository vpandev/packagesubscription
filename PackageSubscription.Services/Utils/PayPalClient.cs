using PayPalCheckoutSdk.Core;
using PayPalHttp;

namespace PackageSubscription.Services.Utils
{
    public class PayPalClient
    {
        public static HttpClient Client(string clientId, string clientSecret)
        {
            return new PayPalHttpClient(new SandboxEnvironment(clientId, clientSecret));
        }
    }
}
