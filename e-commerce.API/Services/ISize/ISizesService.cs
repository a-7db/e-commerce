using e_commerce.API.Dtos;
using System.Drawing;

namespace e_commerce.API.Services.ISize
{
    public interface ISizesService
    {
        void Create(IEnumerable<PostSizeDto> sizes, Guid productId);
    }
}
