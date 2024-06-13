using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace e_commerce.Entities.Models
{
    public class Size
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public required string ProductSize { get; set; }
        public float Price { get; set; }
        public int Discount { get; set; }
        public required ICollection<ProductImages> Images { get; set; }
        public required Guid ProductID { get; set; }
        public Product Product { get; set; }
    }
}
