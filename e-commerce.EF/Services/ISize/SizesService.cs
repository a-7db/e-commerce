using e_commerce.EF.Data;
using e_commerce.Entities.Dtos;
using e_commerce.Entities.Mapping;
using e_commerce.Entities.Models;
using System.Drawing;

namespace e_commerce.EF.Services.ISize
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
