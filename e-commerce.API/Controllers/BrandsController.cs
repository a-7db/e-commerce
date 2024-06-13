using e_commerce.EF.Data;
using e_commerce.Entities.Dtos;
using e_commerce.Entities.Mapping;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace e_commerce.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        private readonly DataContext _context;

        public BrandsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BrandDto>>> GetBrands()
        {
            return await _context.Brands.Select(brand => brand.ToDto()).ToListAsync();
        }
    }
}
