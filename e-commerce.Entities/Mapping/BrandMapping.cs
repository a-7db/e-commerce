using e_commerce.Entities.Dtos;
using e_commerce.Entities.Models;

namespace e_commerce.Entities.Mapping
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
