
using e_commerce.Entities.Dtos;
using e_commerce.Entities.Models;

namespace e_commerce.Entities.Mapping
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

        public static CategoryWithChildrenDto ToDtoWithChildren(this CategoryDto dto, IEnumerable<Category> children)
        {
            return new CategoryWithChildrenDto
            (
                dto.ID,
                dto.Title,
                dto.Slug,
                dto.ImageUri,
                dto.isDisplayed,
                children.Select(x => x.ToDto())
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
