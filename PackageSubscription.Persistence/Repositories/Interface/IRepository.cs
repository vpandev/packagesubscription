using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace PackageSubscription.Persistence.Repositories.Interface
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(object id);
        T Add(T entity);
        T Update(T entity);
        bool Delete(object id);
        T Where(Expression<Func<T, bool>> expression);
    }
}
