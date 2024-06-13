using e_commerce.Entities.Dtos;
using e_commerce.Entities.Models;

namespace e_commerce.EF.Services.ICategory
{
    public interface ICategoryService
    {
        Task<IEnumerable<CategoryDto>> GetAll();
        Task<IEnumerable<CategoryDto>> GetAllParent();
        Task<IEnumerable<CategoryWithChildrenDto>?> GetAllWithChildren();
        Task<IEnumerable<Category>> GetChildrenById(Guid id);
        Task<CategoryDto?> GetById(Guid id);
        Task<CategoryDto?> GetBySlug(Guid slug);
        Task<CategoryDto> PostCategory(PostCategoryDto Dto);
        Task<IEnumerable<CategoryDto>> Update(Guid id);
        Task<IEnumerable<CategoryDto>> Delete(Guid id);
    }
}
