namespace PackageSubscription.Shared.Dtos
{
    public class PackageDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal MonthlyPrice { get; set; }

        public decimal AnnualPrice { get; set; }

        public int PackageType { get; set; }
    }
}
