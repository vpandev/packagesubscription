using PackageSubscription.Shared.Enums;

namespace PackageSubscription.Shared.Dtos
{
    public class PackageSubscribeDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int PackageId { get; set; }

        public int SubscriptionType { get; set; }

        public decimal Amount { get; set; }

        public string PaymentId { get; set; }
    }
}
