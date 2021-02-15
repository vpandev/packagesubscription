using Microsoft.Extensions.DependencyInjection;
using PackageSubscription.Persistence.Repositories.Implementation;
using PackageSubscription.Persistence.Repositories.Interface;

namespace PackageSubscription.Persistence
{
    public static class RepositoryInjectionModule
    {
        public static IServiceCollection InjectPersistence(this IServiceCollection services)
        {
            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
            services.AddTransient(typeof(IUserRepository), typeof(UserRepository));
            services.AddTransient(typeof(ISubscriptionRepository), typeof(SubscriptionRepository));

            return services;
        }
    }
}
