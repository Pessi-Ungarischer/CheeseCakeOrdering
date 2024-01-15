namespace Cheesecake_Ordering.Data
{
    public class Cheesecake
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string BaseFlavor { get; set; }
        public string Toppings { get; set; }
        public string SpecialRequest { get; set; }
        public int Quantity { get; set; }
        public DateTime DeliveryDate { get; set; }
        public int Total { get; set; }
    }
}