namespace e_commerce.Entities.Dtos
{
    public record CategoryDto
    (
        Guid ID,
        string Title,
        string Slug,
        string? ImageUri,
        Guid? ParentCategoryId,
        CategoryDto? ParentCategory,
        bool isDisplayed
    );

    public record PostCategoryDto
    (
        string Title,
        string Slug,
        string? ImageUri,
        string? ParentCategoryId,
        bool isDisplayed
    );

    public record CategoryWithChildrenDto
    (
        Guid ID,
        string Title,
        string Slug,
        string? ImageUri,
        bool isDisplayed,
        IEnumerable<CategoryDto>? children
    );

}
