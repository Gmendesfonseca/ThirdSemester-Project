using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Usuarios
{
    public record class UserDto(
        uint Id,
        string Nome,
        string Email,
        string Password
        );
}
