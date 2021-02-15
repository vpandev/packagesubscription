using PackageSubscription.Persistence.Entities;

namespace PackageSubscription.Persistence.Repositories.Interface
{
    public interface IUserRepository : IRepository<User>
    {
        User GetByCredentials(string username, string password);
    }
}
