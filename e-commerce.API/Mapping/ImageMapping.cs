using e_commerce.API.Dtos;
using e_commerce.API.Models;

namespace e_commerce.API.Mapping
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
