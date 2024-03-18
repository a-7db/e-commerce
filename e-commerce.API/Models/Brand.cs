using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace e_commerce.API.Models
{
    public class Brand
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public required string Name { get; set; }
        public string? Image { get; set; }
        public required string slug { get; set; }
        public virtual required Product Product { get; set; }
        public bool isDisplayed { get; set; } = false;
    }
}
