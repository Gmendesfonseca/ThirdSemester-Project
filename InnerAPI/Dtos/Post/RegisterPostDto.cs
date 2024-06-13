using System.ComponentModel.DataAnnotations;
using InnerAPI.Models;
namespace InnerAPI.Dtos.Post

{
    public record class RegisterPostDto
    (
        [Required] uint Id,
        [Required] string CreatorName,
        [Required] string CreatorImage,
        [Required] string Title,
        [Required] string Image,
        [Required] string Description
    )
{
        public uint Id { get; set; }
        public string CreatorName { get; set; }
        public string CreatorImage { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Description { get; set;}
}
}