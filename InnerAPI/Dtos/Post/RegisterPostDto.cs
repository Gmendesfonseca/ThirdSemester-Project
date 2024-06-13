using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Post
{
    public record class RegisterPostDto
    (
        [Required] uint Id,
        [Required] string Title,
        [Required] uint Likes, //Talvez mudar tipo para ushort
        //[Required] Comments Comments,
        [Required] List<string> Content,
        [Required] DateOnly DataPostagem,
        [Required] uint CreatorId,
        [Required] uint InstitutionId
    );
}
