using e_commerce.API.Data;
using e_commerce.API.Dtos;
using e_commerce.API.Mapping;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.API.Services.ICategory
{
    public class CategoryService : ICategoryService
    {
        public readonly DataContext _context;

        public CategoryService(DataContext context)
        {
            _context = context;
        }

        public Task<IEnumerable<CategoryDto>> Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CategoryDto>> GetAll()
        {
            var categories = await _context.Categories.ToListAsync();
            var categoryDtos = categories.Select(cate => cate.ToDto()).ToList();

            for (int i = 0; i < categoryDtos.Count; i++)
            {
                var categoryDto = categoryDtos[i];

                if (categoryDto.ParentCategoryId.HasValue)
                {
                    var parentCategory = categories.FirstOrDefault(c => c.ID == categoryDto.ParentCategoryId);
                    if (parentCategory != null)
                    {
                        categoryDto = categoryDto with { ParentCategory = parentCategory.ToDto() };
                        categoryDtos[i] = categoryDto;
                    }
                }
            }

            return categoryDtos;
        }

        public async Task<IEnumerable<CategoryDto>> GetAllParent()
        {
            return await _context.Categories.Where(c => c.ParentCategoryID == null).Select(c => c.ToDto()).ToListAsync();
        }

        public async Task<CategoryDto?> GetById(Guid id)
        {
            var cate = await _context.Categories.SingleOrDefaultAsync(c => c.ID == id);

            if (cate == null)
                return null;

            if (cate.ParentCategoryID.HasValue)
                cate.ParentCategory = await _context.Categories.SingleOrDefaultAsync(c => c.ID == cate.ParentCategoryID);

            var dto = cate?.ToDto();

            return dto;
        }

        public Task<CategoryDto?> GetBySlug(Guid slug)
        {
            throw new NotImplementedException();
        }

        public Task<CategoryDto> PostCategory(PostCategoryDto Dto)
        {
            var toEntity = Dto.ToEntity();

            _context.Categories.Add(toEntity);
            _context.SaveChanges();

            var newCategory = GetById(toEntity.ID);

            return newCategory!;
        }

        public Task<IEnumerable<CategoryDto>> Update(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
