using e_commerce.API.Data;
using e_commerce.API.Dtos;
using e_commerce.API.Models;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace e_commerce.API.Mapping
{
    public static class ProductMapping
    {
        public static ProductDto ToDto(this Product product)
        {

            return new ProductDto
            (
                product.ID,
                product.Name,
                product.CreatedAt,
                product.Slug,

                product.Brand.Name,
                product.Category.Title,

                product.Sizes.Where(s => s.ProductID == product.ID).Select(s =>
                new SizeDto(
                        s.ID, s.ProductSize, s.Price, s.Discount,

                        s.Images.Where(i => i.SizeID == s.ID)
                        .Select(img => new ImagesDto(img.ID, img.ImageUri))
                    )).ToList()
            );

            
        }


        public static Product ToEntity(this PostProductDto dto)
        {
            return new Product()
            {
                ID = Guid.NewGuid(),
                Name = dto.Name,
                Slug = dto.Slug,
                BrandID = dto.BrandID,
                CategoryID = dto.CategoryID,
                CreatedAt = DateTime.Now
            };
        }
    }
}
