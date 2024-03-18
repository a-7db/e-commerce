using e_commerce.API.Data;
using e_commerce.API.Dtos;
using e_commerce.API.Mapping;
using e_commerce.API.Models;
using System.Drawing;

namespace e_commerce.API.Services.ISize
{
    public class SizesService : ISizesService
    {
        private readonly DataContext _context;

        public SizesService(DataContext context)
        {
            _context = context;
        }

        public void Create(IEnumerable<PostSizeDto> sizes, Guid productId)
        {
            foreach (var sizeDto in sizes)
            {
                _context.Sizes.Add(sizeDto.ToEntity(productId));
            }
            _context.SaveChanges();
        }
    }
}
