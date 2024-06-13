using e_commerce.EF.Data;
using e_commerce.Entities.Dtos;
using e_commerce.Entities.Mapping;
using e_commerce.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.EF.Services.ICategory
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

        public async Task<IEnumerable<CategoryWithChildrenDto>?> GetAllWithChildren()
        {
            List<CategoryWithChildrenDto> withChildrenDto = new List<CategoryWithChildrenDto>();
            var parentCategories = await GetAllParent();

            foreach (var parent in parentCategories)
            {
                var children = await GetChildrenById(parent.ID);
                withChildrenDto?.Add(parent.ToDtoWithChildren(children));
            }

            return withChildrenDto;
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

        public async Task<IEnumerable<Category>> GetChildrenById(Guid id)
        {
            return await _context.Categories.Where(c => c.ParentCategoryID == id).ToListAsync();
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
