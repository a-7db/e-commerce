namespace e_commerce.Entities.Dtos
{
    public record ProductDto
    (
        Guid ID,
        string Name,
        DateTime CreatedAt,
        string Slug,
        string BrandName,
        string CategoryName,
        List<SizeDto> Sizes
    );

    public record PostProductDto
    (
        string Name,
        string Slug,
        Guid BrandID,
        Guid CategoryID,
        List<PostSizeDto> Sizes
    );

}
