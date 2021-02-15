using System;
using PackageSubscription.Shared.Dtos;

namespace PackageSubscription.Services.Interface
{
    public interface IPackageService
    {
        PackageDto GetPackageByZone(TimeZoneInfo timeZoneInfo);
        void SubscribeForPackage(PackageSubscribeDto model);
        decimal CalculateTotalPrice(int packageId, int subscriptionType, TimeZoneInfo timeZoneInfo);
        bool MarkSubscriptionAsPayed(string paymentId);
    }
}
