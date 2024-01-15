using Cheesecake_Ordering.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Homework_05_22_Cheesecake_Ordering.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheeseCakeController : ControllerBase
    {
        private string _connectionString;

        public CheeseCakeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }


        [HttpPost]
        [Route("InsertCheeseCake")]
        public void InsertCheeseCake(Cheesecake c)
        {
            CheeseCakeRepo cr = new(_connectionString);
            cr.InsertCheeseCake(c);
        }

        [Route("GetOrders")]
        public List<Cheesecake> GetOrders()
        {
            CheeseCakeRepo cr = new(_connectionString);
            return cr.GetOrders();
        }

        [Route("OrderDetails")]
        public Cheesecake OrderDetails(int id)
        {
            CheeseCakeRepo cr = new(_connectionString);
            return cr.GetOrdersById(id).First();
        }
    }
}
