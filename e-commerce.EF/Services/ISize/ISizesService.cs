using e_commerce.Entities.Dtos;
using System.Drawing;

namespace e_commerce.EF.Services.ISize
{
    public interface ISizesService
    {
        void Create(IEnumerable<PostSizeDto> sizes, Guid productId);
    }
}
