using e_commerce.EF.Data;
using e_commerce.Entities.Dtos;
using e_commerce.Entities.Mapping;
using e_commerce.Entities.Models;
using e_commerce.EF.Services.ICategory;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryDto>>> Get()
        {
            var categoryDtos = await _categoryService.GetAll();

            return Ok(categoryDtos);
        }

        // Get By ID
        [HttpGet("{id:guid}", Name = "GetById")]
        public async Task<ActionResult<IEnumerable<CategoryDto>>> GetById(Guid id)
        {
            var categoryDtos = await _categoryService.GetAll();

            return Ok(categoryDtos);
        }

        [HttpGet("GetAllParent")]
        public async Task<ActionResult<IEnumerable<CategoryDto>>> GetAllParent()
        {
            var allParent = await _categoryService.GetAllParent();
            return Ok(allParent);
        }

        [HttpGet("GetAllWithChildren")]
        public async Task<ActionResult<IEnumerable<CategoryWithChildrenDto>>> GetAllWithChildren()
        {
            var allWithChildren = await _categoryService.GetAllWithChildren();
            return Ok(allWithChildren);
        }

        [HttpPost]
        public async Task<ActionResult<CategoryDto>> Post([FromBody] PostCategoryDto categoryDto)
        {
            if (categoryDto == null)
                NotFound("Empty Fields");

            var newCategory = await _categoryService.PostCategory(categoryDto!);

            return CreatedAtAction(nameof(GetById), new { ID = newCategory.ID }, newCategory);
        }
    }
}
