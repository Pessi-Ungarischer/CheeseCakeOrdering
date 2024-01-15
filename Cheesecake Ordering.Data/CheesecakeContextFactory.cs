using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cheesecake_Ordering.Data
{
    public class CheesecakeContextFactory : IDesignTimeDbContextFactory<CheesecakeDbContext>
    {
        public CheesecakeDbContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}Homework 05-22 Cheesecake Ordering.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CheesecakeDbContext(config.GetConnectionString("ConStr"));
        }
    }
}

