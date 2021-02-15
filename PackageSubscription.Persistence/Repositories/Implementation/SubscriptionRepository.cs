using System.Linq;
using PackageSubscription.Persistence.Data;
using PackageSubscription.Persistence.Entities;
using PackageSubscription.Persistence.Repositories.Interface;

namespace PackageSubscription.Persistence.Repositories.Implementation
{
    public class SubscriptionRepository : Repository<Subscription>, ISubscriptionRepository
    {
        private readonly PackageSubscriptionDbContext _dbContext;

        public SubscriptionRepository(PackageSubscriptionDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public Subscription FindByPaymentId(string paymentId)
        {
            return _dbContext.Subscriptions.FirstOrDefault(x => x.PaymentId == paymentId);
        }
    }
}
