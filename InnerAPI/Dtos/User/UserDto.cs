using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.User
{
    public record class UserDto(
        [Required] int Id,
        [Required] string Nome,
        [Required] string Email,
        [Required] string Password
        );
}
