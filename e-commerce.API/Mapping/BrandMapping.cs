using e_commerce.API.Data;
using e_commerce.API.Dtos;
using e_commerce.API.Models;

namespace e_commerce.API.Mapping
{
    public static class BrandMapping
    {
        public static BrandDto ToDto(this Brand brand)
        {
            return new BrandDto
            (
                brand.ID,
                brand.Name,
                brand.Image,
                brand.slug
            );
        }
    }
}
