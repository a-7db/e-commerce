namespace e_commerce.API.Dtos
{
    public record BrandDto
    (
        Guid ID,
        string Name,
        string? Image,
        string Slug
    );

}
