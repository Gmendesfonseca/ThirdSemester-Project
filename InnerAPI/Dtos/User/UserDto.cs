using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.User
{
    public record class UserDto(
        int Id,
        string Nome,
        string Email,
        int Type,
        string Password
        );
}
