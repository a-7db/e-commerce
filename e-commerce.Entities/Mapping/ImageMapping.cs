using e_commerce.Entities.Dtos;
using e_commerce.Entities.Models;

namespace e_commerce.Entities.Mapping
{
    public static class ImageMapping
    {
        public static ProductImages ToEntity(this PostImagesDto dto, Guid sizeID)
        {
            return new ProductImages()
            {
                ID = Guid.NewGuid(),
                ImageUri = dto.ImageUri,
                SizeID = sizeID
            };
        }
    }
}
