using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace e_commerce.API.Models
{
    public class ProductImages
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public required string ImageUri { get; set; }

        public required Guid SizeID { get; set; }
        public Size Size { get; set; }
    }
}
