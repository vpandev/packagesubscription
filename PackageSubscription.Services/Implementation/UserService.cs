using System;
using PackageSubscription.Persistence.Repositories.Interface;
using PackageSubscription.Services.Interface;
using PackageSubscription.Shared.Dtos;
using PackageSubscription.Shared.Mappers;

namespace PackageSubscription.Services.Implementation
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserDto LoginUser(LoginUserDto model)
        {
            var userDb = _userRepository.GetByCredentials(model.Username, model.Password);
            if (userDb == null)
            {
                throw new ApplicationException("Invalid username or password!");
            }

            return userDb.ToDto();
        }
    }
}
