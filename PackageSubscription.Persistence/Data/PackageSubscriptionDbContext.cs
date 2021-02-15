using Microsoft.EntityFrameworkCore;
using PackageSubscription.Persistence.Entities;

namespace PackageSubscription.Persistence.Data
{
    public class PackageSubscriptionDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Package> Packages { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }

        public PackageSubscriptionDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User { Id = 1, Username = "vpandev", Password = "P@ssw0rd" },
                new User { Id = 2, Username = "user1", Password = "P@ssw0rd" },
                new User { Id = 3, Username = "user2", Password = "P@ssw0rd" },
                new User { Id = 4, Username = "user3", Password = "P@ssw0rd" }
            );

            modelBuilder.Entity<Package>().HasData(
                new Package
                {
                    Id = 1,
                    Name = "EU Package",
                    Description = "This is package service for EU citizens",
                    MonthlyPrice = 1200,
                    AnnualPrice = 10500,
                    PackageType = 1
                },
                new Package
                {
                    Id = 2,
                    Name = "Enterprise Package",
                    Description = "This is package service for USA citizens",
                    MonthlyPrice = 1400,
                    AnnualPrice = 12500,
                    PackageType = 2
                }
            );
        }
    }


}
