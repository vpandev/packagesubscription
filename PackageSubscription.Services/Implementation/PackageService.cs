using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PackageSubscription.Persistence.Entities;
using PackageSubscription.Persistence.Repositories.Interface;
using PackageSubscription.Services.Interface;
using PackageSubscription.Shared.Dtos;
using PackageSubscription.Shared.Enums;
using PackageSubscription.Shared.Helpers;
using PackageSubscription.Shared.Mappers;

namespace PackageSubscription.Services.Implementation
{
    public class PackageService : IPackageService
    {
        private readonly IRepository<Package> _packageRepository;
        private readonly IRepository<User> _userRepository;
        private readonly ISubscriptionRepository _subscriptionRepository;

        private readonly IConfiguration _configuration;
        private readonly ILogger<PackageService> _logger;

        public PackageService(
            IRepository<Package> packageRepository,
            IRepository<User> userRepository,
            IConfiguration configuration,
            ISubscriptionRepository subscriptionRepository,
            ILogger<PackageService> logger)
        {
            _packageRepository = packageRepository;
            _userRepository = userRepository;
            _configuration = configuration;
            _subscriptionRepository = subscriptionRepository;
            _logger = logger;
        }

        public PackageDto GetPackageByZone(TimeZoneInfo timeZoneInfo)
        {
            var packageDb = timeZoneInfo.Id.Contains(EnumDescription.GetEnumDescription(PackageTypeEnum.EU))
                ? _packageRepository.Where(x => x.PackageType == (int)PackageTypeEnum.EU)
                : _packageRepository.Where(x => x.PackageType == (int)PackageTypeEnum.USA);

            if (packageDb == null)
            {
                throw new ApplicationException("Nonexisting package!");
            }

            return packageDb.ToDto();
        }

        public void SubscribeForPackage(PackageSubscribeDto model)
        {
            var packageDb = _packageRepository.GetById(model.PackageId);
            if (packageDb == null)
            {
                throw new ApplicationException("Nonexisting package!");
            }

            var userDb = _userRepository.GetById(model.PackageId);
            if (packageDb == null)
            {
                throw new ApplicationException("Nonexisting package!");
            }

            var subscription = new Subscription
            {
                User = userDb,
                Package = packageDb,
                TotalPrice = model.Amount,
                DateFrom = DateTime.Now,
                DateTo = model.SubscriptionType == (int)SubscriptionTypeEnum.Monthly
                    ? DateTime.Now.AddMonths(1)
                    : DateTime.Now.AddYears(1),
                PaymentId = model.PaymentId,
                IsPaid = false
            };

            userDb.AddSubscription(subscription);
            _userRepository.Update(userDb);
        }

        public decimal CalculateTotalPrice(int packageId, int subscriptionType, TimeZoneInfo timeZoneInfo)
        {
            var packageDb = _packageRepository.GetById(packageId);
            if (packageDb == null)
            {
                throw new ApplicationException("Nonexisting package!");
            }

            var price = subscriptionType == (int)SubscriptionTypeEnum.Monthly
                ? packageDb.MonthlyPrice
                : packageDb.AnnualPrice;

            if (timeZoneInfo.Id.Contains(EnumDescription.GetEnumDescription(PackageTypeEnum.EU)))
            {
                var euTaxPercentage = Convert.ToDecimal(_configuration["ApplicationParameters:EuropeanTaxPercentage"]);

                return price + price * euTaxPercentage;
            }

            if (timeZoneInfo.Id.Contains(EnumDescription.GetEnumDescription(PackageTypeEnum.UK)))
            {
                var ukTaxPercentage = Convert.ToDecimal(_configuration["ApplicationParameters:UkTaxPercentage"]);

                return price + price * ukTaxPercentage;
            }

            return price;
        }

        public bool MarkSubscriptionAsPayed(string paymentId)
        {
            try
            {
                var subscription = _subscriptionRepository.FindByPaymentId(paymentId);
                if (subscription == null)
                {
                    throw new ApplicationException("Nonexisting subscription!");
                }

                subscription.IsPaid = true;
                _subscriptionRepository.Update(subscription);

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
    }
}
