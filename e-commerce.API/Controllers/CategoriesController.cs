using e_commerce.API.Data;
using e_commerce.API.Dtos;
using e_commerce.API.Mapping;
using e_commerce.API.Models;
using e_commerce.API.Services.ICategory;
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

        [HttpGet("GetAllParent")]
        public async Task<ActionResult<IEnumerable<CategoryDto>>> GetAllParent()
        {
            var allParent = await _categoryService.GetAllParent();
            return Ok(allParent);
        }

        [HttpPost]
        public async Task<ActionResult<CategoryDto>> Post([FromBody] PostCategoryDto categoryDto)
        {
            if (categoryDto == null)
                NotFound("Empty Fields");

            var newCategory = await _categoryService.PostCategory(categoryDto!);


            return Created($"~/api/v1/categories/{newCategory.ID}", newCategory);
        }
    }
}
