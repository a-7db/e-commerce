using e_commerce.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.EF.Data
{
    public static class DataModelExtentions
    {
        public static void Relationships(this ModelBuilder modelBuilder)
        {
            // One-to-One
            // Brand Relationship
            modelBuilder.Entity<Brand>()
                .HasOne(brnd => brnd.Product)
                .WithOne(prod => prod.Brand)
                .HasForeignKey<Product>(prod => prod.BrandID);

            // Sizes Relationship
            modelBuilder.Entity<Product>()
                .HasMany<Size>(prod => prod.Sizes)
                .WithOne(s => s.Product)
                .HasForeignKey(s => s.ProductID);

            // Category Relationship
            modelBuilder.Entity<Category>()
                .HasOne(c => c.Product)
                .WithOne(p => p.Category)
                .HasForeignKey<Product>(p => p.CategoryID);

            // Image Relationships
            modelBuilder.Entity<ProductImages>()
                .HasOne(i => i.Size)
                .WithMany(s => s.Images)
                .HasForeignKey(s => s.SizeID);
        }

        public static void AutoIncluding(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().Navigation(p => p.Brand).AutoInclude();
            modelBuilder.Entity<Product>().Navigation(p => p.Category).AutoInclude();
            modelBuilder.Entity<Product>().Navigation(p => p.Sizes).AutoInclude();
            modelBuilder.Entity<Size>().Navigation(s => s.Images).AutoInclude();
        }
    }
}
