using Microsoft.Extensions.DependencyInjection;
using PackageSubscription.Services.Implementation;
using PackageSubscription.Services.Interface;

namespace PackageSubscription.Services
{
    public static class ServiceInjectionModule
    {
        public static IServiceCollection InjectServices(this IServiceCollection services)
        {
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IPackageService, PackageService>();
            services.AddTransient<IPaymentService, PaymentService>();

            return services;
        }
    }
}
