using e_commerce.API.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.API.Data
{
    public class DataContext : DbContext
    {
        //public IConfiguration? config { get; }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }


        public DbSet<Product> Products { get; set; }
    }
}
