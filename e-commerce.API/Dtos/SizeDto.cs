namespace e_commerce.API.Dtos
{
    public record SizeDto
    (
        Guid ID,
        string ProductSize,
        float Price,
        int Discount,
        IEnumerable<ImagesDto> ImagesUri
    );

    public record PostSizeDto
    (
        string ProductSize,
        float Price,
        int Discount,
        IEnumerable<PostImagesDto> ImagesUri
    );

}
