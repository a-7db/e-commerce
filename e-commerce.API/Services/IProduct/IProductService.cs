using e_commerce.API.Dtos;
using e_commerce.API.Models;

namespace e_commerce.API.Services.IProduct
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetAll();
        Task<Product?> GetById(Guid id);
        Task<Product?> GetBySlug(string slug);
        void Create(Product postProductDto);
        Task<IEnumerable<ProductDto>> Update(ProductDto productDto);
        Task<IEnumerable<ProductDto>> Delete(Guid id);
        Task<Boolean> IsExist(Guid id);
    }
}
