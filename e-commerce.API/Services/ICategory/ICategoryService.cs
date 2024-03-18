using e_commerce.API.Dtos;

namespace e_commerce.API.Services.ICategory
{
    public interface ICategoryService
    {
        Task<IEnumerable<CategoryDto>> GetAll();
        Task<IEnumerable<CategoryDto>> GetAllParent();
        Task<CategoryDto?> GetById(Guid id);
        Task<CategoryDto?> GetBySlug(Guid slug);
        Task<CategoryDto> PostCategory(PostCategoryDto Dto);
        Task<IEnumerable<CategoryDto>> Update(Guid id);
        Task<IEnumerable<CategoryDto>> Delete(Guid id);
    }
}
