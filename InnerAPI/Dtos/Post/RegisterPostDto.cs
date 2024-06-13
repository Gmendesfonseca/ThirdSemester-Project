using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Post
{
    public record class RegisterPostDto
    (
        [Required] uint IdPost,
        [Required] string TitlePost,
        [Required] uint NumLikes,
        [Required] List<string> Comments,
        [Required] string ContentPost,
        [Required] DateOnly DatePost,
        [Required] uint CreatorId,
        [Required] uint InstitutionId
    );
}
