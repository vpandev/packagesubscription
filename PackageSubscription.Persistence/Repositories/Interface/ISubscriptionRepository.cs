using PackageSubscription.Persistence.Entities;

namespace PackageSubscription.Persistence.Repositories.Interface
{
    public interface ISubscriptionRepository : IRepository<Subscription>
    {
        Subscription FindByPaymentId(string paymentId);
    }
}
