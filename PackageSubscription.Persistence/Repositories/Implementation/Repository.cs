using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using PackageSubscription.Persistence.Data;
using PackageSubscription.Persistence.Repositories.Interface;

namespace PackageSubscription.Persistence.Repositories.Implementation
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly PackageSubscriptionDbContext _dbContext;

        public Repository(PackageSubscriptionDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbContext.Set<TEntity>();
        }

        public TEntity GetById(object id)
        {
            var entity = _dbContext.Find<TEntity>(id);
            return entity;
        }

        public TEntity Add(TEntity entity)
        {
            if (entity == null) throw new ArgumentNullException(nameof(entity));

            var result = _dbContext.Add(entity);
            _dbContext.SaveChanges();
            return result.Entity;
        }

        public TEntity Update(TEntity entity)
        {
            if (entity == null) throw new ArgumentNullException(nameof(entity));

            _dbContext.Update(entity);
            _dbContext.SaveChanges();

            return entity;
        }

        public bool Delete(object id)
        {
            var entity = _dbContext.Find<TEntity>(id);
            if (entity == null) return true;

            _dbContext.Remove(entity);
            _dbContext.SaveChanges();

            return true;
        }

        public TEntity Where(Expression<Func<TEntity, bool>> expression)
        {
            return _dbContext.Set<TEntity>().Where(expression).FirstOrDefault();
        }
    }
}
