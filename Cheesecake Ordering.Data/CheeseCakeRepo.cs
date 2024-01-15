using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cheesecake_Ordering.Data
{
    public class CheeseCakeRepo
    {
        static private string _connectionString;

        public CheeseCakeRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void InsertCheeseCake(Cheesecake c)
        {
            using CheesecakeDbContext context = new(_connectionString);
            context.Cheesecakes.Add(c);
            context.SaveChanges();
        }

        public List<Cheesecake> GetOrders()
        {
            using CheesecakeDbContext context = new (_connectionString);
            return context.Cheesecakes.ToList();

        }

        public List<Cheesecake> GetOrdersById(int id)
        {
            using CheesecakeDbContext context = new(_connectionString);
            return context.Cheesecakes.Where(c => c.id == id).ToList();
        }
    }
}
