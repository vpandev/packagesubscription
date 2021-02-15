using System;
using Moq;
using PackageSubscription.Persistence.Repositories.Interface;
using PackageSubscription.Services.Implementation;
using PackageSubscription.Shared.Dtos;
using Xunit;

namespace PackageSubscription.Test
{
    public class UserServiceTest
    {
        private readonly UserService _sut;

        public UserServiceTest()
        {
            var userRepository = new Mock<IUserRepository>();

            _sut = new UserService(userRepository.Object);
        }

        [Fact]
        public void will_throw_invalid_credentials()
        {
            var user = new LoginUserDto
            {
                Username = "test",
                Password = "123"
            };

            Exception ex = Assert.Throws<ApplicationException>(() => _sut.LoginUser(user));
            Assert.Equal("Invalid username or password!", ex.Message);
        }
    }
}
