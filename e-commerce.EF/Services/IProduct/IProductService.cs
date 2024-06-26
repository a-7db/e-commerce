﻿using e_commerce.Entities.Dtos;
using e_commerce.Entities.Models;

namespace e_commerce.EF.Services.IProduct
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
