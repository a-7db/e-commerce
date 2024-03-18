using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using e_commerce.API.Dtos;

namespace e_commerce.API.Models
{
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID { get; set; }
        public required string Title { get; set; }
        public Guid? ParentCategoryID { get; set; }
        public Category? ParentCategory { get; set; }
        public string? Image { get; set; }
        public required string Slug { get; set; }
        public Product? Product { get; set; }
        public bool isDisplayed { get; set; } = false;

    }
}
