using e_commerce.API.Data;
using e_commerce.API.Dtos;
using e_commerce.API.Models;

namespace e_commerce.API.Mapping
{
    public static class CategoryMapping
    {
        public static CategoryDto ToDto(this Category category)
        {
            return new CategoryDto
            (
                category.ID,
                category.Title,
                category.Slug,
                category.Image,
                category.ParentCategoryID,
                category.ParentCategory?.ToDto(),
                category.isDisplayed
            );
        }

        public static Category ToEntity(this PostCategoryDto postCategory)
        {
            Guid? parentCateId;
            if (Guid.TryParse(postCategory.ParentCategoryId, out Guid convertedId))
            {
                parentCateId = convertedId;
            } else
                parentCateId= null;

            return new Category()
            {
                ID = Guid.NewGuid(),
                Title = postCategory.Title,
                Slug = postCategory.Slug,
                Image = postCategory.ImageUri,
                ParentCategoryID = parentCateId,
                isDisplayed = postCategory.isDisplayed
            };
        }

    }
}
