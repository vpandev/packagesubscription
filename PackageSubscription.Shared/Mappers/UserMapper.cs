using PackageSubscription.Persistence.Entities;
using PackageSubscription.Shared.Dtos;

namespace PackageSubscription.Shared.Mappers
{
    public static class UserMapper
    {
        public static UserDto ToDto(this User domain)
        {
            return new UserDto
            {
                Id = domain.Id,
                Username = domain.Username
            };
        }
    }
}
