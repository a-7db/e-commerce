namespace e_commerce.Entities.Dtos
{
    public record BrandDto
    (
        Guid ID,
        string Name,
        string? Image,
        string Slug
    );

}
