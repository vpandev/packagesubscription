using System.Linq;
using PackageSubscription.Persistence.Data;
using PackageSubscription.Persistence.Entities;
using PackageSubscription.Persistence.Repositories.Interface;

namespace PackageSubscription.Persistence.Repositories.Implementation
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly PackageSubscriptionDbContext _dbContext;

        public UserRepository(PackageSubscriptionDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public User GetByCredentials(string username, string password)
        {
            return _dbContext.Users.FirstOrDefault(x => x.Username == username && x.Password == password);
        }
    }
}
