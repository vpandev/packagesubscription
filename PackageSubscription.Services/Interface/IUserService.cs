using PackageSubscription.Shared.Dtos;

namespace PackageSubscription.Services.Interface
{
    public interface IUserService
    {
        UserDto LoginUser(LoginUserDto model);
    }
}
