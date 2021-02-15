using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PackageSubscription.Persistence.Entities
{
    public class User
    {
        public User()
        {
            Subscriptions = new List<Subscription>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(150)]
        public string Username { get; set; }

        [Required]
        [MaxLength(150)]
        public string Password { get; set; }

        public IList<Subscription> Subscriptions { get; set; }

        public virtual void AddSubscription(Subscription subscription)
        {
            subscription.User = this;
            Subscriptions.Add(subscription);
        }
    }
}
