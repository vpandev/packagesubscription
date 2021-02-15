using System;
using System.ComponentModel.DataAnnotations;

namespace PackageSubscription.Persistence.Entities
{
    public class Subscription
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime DateFrom { get; set; }

        [Required]
        public DateTime DateTo { get; set; }

        [Required]
        [DataType("decimal(10 ,2)")]
        public decimal TotalPrice { get; set; }

        [Required]
        public int PackageId { get; set; }

        public Package Package { get; set; }

        [Required]
        public int UserId { get; set; }

        public User User { get; set; }

        public string PaymentId { get; set; }

        public bool IsPaid { get; set; }
    }
}
