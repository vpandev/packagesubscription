using PackageSubscription.Persistence.Entities;
using PackageSubscription.Shared.Dtos;

namespace PackageSubscription.Shared.Mappers
{
    public static class PackageMapper
    {
        public static PackageDto ToDto(this Package domain)
        {
            return new PackageDto
            {
                Id = domain.Id,
                Name = domain.Name,
                Description = domain.Description,
                MonthlyPrice = domain.MonthlyPrice,
                AnnualPrice = domain.AnnualPrice,
                PackageType = domain.PackageType
            };
        }
    }
}
