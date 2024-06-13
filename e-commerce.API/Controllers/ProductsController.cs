using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using e_commerce.EF.Data;
using e_commerce.Entities.Models;
using e_commerce.Entities.Dtos;
using e_commerce.Entities.Mapping;
using Microsoft.CodeAnalysis;
using e_commerce.EF.Services.IProduct;
using e_commerce.EF.Services.ISize;

namespace e_commerce.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ISizesService _SizesService;

        public ProductsController(IProductService productService, ISizesService sizesService)
        {
            _productService = productService;
            _SizesService = sizesService;
        }




        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDto>>> GetProducts()
        {
            var products = await _productService.GetAll();
            return Ok(products);
        }

        // GET: api/Products/5
        [HttpGet("{slug}")]
        public async Task<ActionResult<ProductDto>> GetProduct(string slug)
        {
            var product = await _productService.GetBySlug(slug);

            ProductDto productDto;

            if (product == null)
                return NotFound();
            else
                productDto = product.ToDto();


            return Ok(productDto);
        }
        
        [HttpGet("{ID}")]
        private async Task<ActionResult<ProductDto>> GetProductById(Guid ID)
        {
            var product = await _productService.GetById(ID);

            ProductDto productDto;

            if (product == null)
                return NotFound();
            else
                productDto = product.ToDto();

            return Ok(productDto);
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutProduct(Guid id, Product product)
        //{
        //    if (id != product.ID)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(product).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ProductExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<ProductDto>> PostProduct([FromBody] PostProductDto productDto)
        {
            if (productDto == null)
                return NotFound("Enable to find the new prdouct");

            // Add Product
            var product = productDto.ToEntity();

            _productService.Create(product);


            if (product == null)
                return BadRequest();

            // Add Sizes 
            _SizesService.Create(productDto.Sizes, product.ID);

            var newProduct = await _productService.GetById(product.ID);


            return Created($"~/api/products/{product.ID}", newProduct!.ToDto());
        }

        // DELETE: api/Products/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteProduct(Guid id)
        //{
        //    var product = await _context.Products.FindAsync(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Products.Remove(product);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool ProductExists(Guid id)
        //{
        //    return _context.Products.Any(e => e.ID == id);
        //}
    }
}
