using e_commerce.Entities.Dtos;
using e_commerce.Entities.Models;

namespace e_commerce.Entities.Mapping
{
    public static class SizeMapping
    {
        public static Size ToEntity(this PostSizeDto dto, Guid productID)
        {
            var sizeID = Guid.NewGuid();
            return new Size()
            {
                ID = sizeID,
                ProductSize = dto.ProductSize,
                Price = dto.Price,
                Discount = dto.Discount,
                ProductID = productID,
                Images = dto.ImagesUri.Select(i => i.ToEntity(sizeID)).ToList()
            };
        }
    }
}
