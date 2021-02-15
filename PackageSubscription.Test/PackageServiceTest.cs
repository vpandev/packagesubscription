using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Moq;
using PackageSubscription.Persistence.Entities;
using PackageSubscription.Persistence.Repositories.Interface;
using PackageSubscription.Services.Implementation;
using PackageSubscription.Shared.Enums;
using Xunit;

namespace PackageSubscription.Test
{
    public class PackageServiceTest
    {
        private readonly PackageService _sut;
        private readonly Mock<IRepository<Package>> _packageRepository;
        private readonly Mock<IConfiguration> _iConfiguration;

        public PackageServiceTest()
        {
            _packageRepository = new Mock<IRepository<Package>>();
            _iConfiguration = new Mock<IConfiguration>();

            var userRepository = new Mock<IRepository<User>>();
            var subscriptionrepository = new Mock<ISubscriptionRepository>();
            var logger = new Mock<ILogger<PackageService>>();

            _sut = new PackageService(_packageRepository.Object, userRepository.Object, _iConfiguration.Object, subscriptionrepository.Object, logger.Object);
        }

        [Fact]
        public void will_not_return_package_by_zone()
        {
            Exception ex = Assert.Throws<ApplicationException>(() => _sut.GetPackageByZone(TimeZoneInfo.Local));
            Assert.Equal("Nonexisting package!", ex.Message);
        }

        [Fact]
        public void will_return_monthly_eu_when_tax_not_set()
        {
            var packageId = 1;

            var newPackage = new Package
            {
                Id = packageId,
                Name = "EU Package",
                Description = "This is package service for EU citizens",
                MonthlyPrice = 1200,
                AnnualPrice = 10500,
                PackageType = 1
            };

            _packageRepository.Setup(x => x.GetById(packageId)).Returns(newPackage);

            var calculated = _sut.CalculateTotalPrice(packageId, (int)SubscriptionTypeEnum.Monthly, TimeZoneInfo.Local);

            Assert.Equal(calculated, 1200);
        }

        [Fact]
        public void will_return_valid_annual_uk_with_tax()
        {
            var packageId = 1;

            var newPackage = new Package
            {
                Id = packageId,
                Name = "EU Package",
                Description = "This is package service for EU citizens",
                MonthlyPrice = 1200,
                AnnualPrice = 10500,
                PackageType = 1
            };

            _packageRepository.Setup(x => x.GetById(packageId)).Returns(newPackage);

            _iConfiguration.SetupGet(x => x[It.Is<string>(s => s == "ApplicationParameters:UkTaxPercentage")]).Returns("0.15");

            var calculated = _sut.CalculateTotalPrice(packageId, (int)SubscriptionTypeEnum.Annual, TimeZoneInfo.FindSystemTimeZoneById("GMT Standard Time"));

            Assert.Equal(calculated, 12075);
        }

        [Fact]
        public void will_return_valid_package_by_zone()
        {
            var packageName = "EU Package";

            var newPackage = new Package
            {
                Id = 1,
                Name = packageName,
                Description = "This is package service for EU citizens",
                MonthlyPrice = 1200,
                AnnualPrice = 10500,
                PackageType = 1
            };

            _packageRepository.Setup(x => x.Where(x => x.PackageType == (int)PackageTypeEnum.EU)).Returns(newPackage);

            var recommended = _sut.GetPackageByZone(TimeZoneInfo.Local);

            Assert.Equal(recommended.Name, packageName);
        }
    }
}
