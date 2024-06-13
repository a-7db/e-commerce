using e_commerce.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.EF.Data
{
    public class DataContext : DbContext
    {
        //public IConfiguration? config { get; }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }


        public DbSet<Product> Products { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<ProductImages> ImagesUri { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // DB Relationships
            modelBuilder.Relationships();

            // AutoInclude Navigations
            modelBuilder.AutoIncluding();

        }
    }
}
