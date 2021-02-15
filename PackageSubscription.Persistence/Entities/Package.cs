using System.ComponentModel.DataAnnotations;

namespace PackageSubscription.Persistence.Entities
{
    public class Package
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(150)]
        public string Name { get; set; }

        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        [Required]
        [DataType("decimal(10 ,2)")]
        public decimal MonthlyPrice { get; set; }

        [Required]
        [DataType("decimal(10 ,2)")]
        public decimal AnnualPrice { get; set; }

        [Required]
        public int PackageType { get; set; }
    }
}
