using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace e_commerce.API.Models
{
    //[Index(propertyNames: ["BrandID", "CategoryID"], IsUnique = false)]
    //[Obsolete]
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public required string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public required string Slug { get; set; }

        public required Guid BrandID { get; set; }
        public Brand Brand { get; set; }

        public required Guid CategoryID { get; set; }
        public Category Category { get; set; }

        public ICollection<Size> Sizes { get; set; }

    }
}
