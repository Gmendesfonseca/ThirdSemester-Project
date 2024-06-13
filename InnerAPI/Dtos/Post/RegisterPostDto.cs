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
<<<<<<< HEAD
        [Required] uint Likes, //Talvez mudar tipo para ushort
        //[Required] Comments Comments,
        [Required] List<string> Content,
        [Required] DateOnly DataPostagem,
        [Required] uint CreatorId,
        [Required] uint InstitutionId
    );
=======
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
>>>>>>> f618f58ca5233d05d9e86427fe0c81dce5f1cb1f
}
}