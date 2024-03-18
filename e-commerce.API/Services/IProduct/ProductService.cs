using e_commerce.API.Data;
using e_commerce.API.Dtos;
using e_commerce.API.Mapping;
using e_commerce.API.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.API.Services.IProduct
{
    public class ProductService : IProductService
    {
        private readonly DataContext _context;

        public ProductService(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProductDto>> GetAll()
        {
            return await _context.Products.Select(prod => prod.ToDto()).ToListAsync();
        }

        public async Task<Product?> GetById(Guid id)
        {
            return await _context.Products.SingleOrDefaultAsync(p => p.ID == id);
        }

        public async Task<Product?> GetBySlug(string slug)
        {
            return await _context.Products.SingleOrDefaultAsync(p => p.Slug == slug);
        }

        public void Create(Product product)
        {
            _context.Products.Add(product);

            _context.SaveChanges();
        }

        public Task<IEnumerable<ProductDto>> Update(ProductDto productDto)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ProductDto>> Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IsExist(Guid id)
        {
            throw new NotImplementedException();
        }

    }
}
