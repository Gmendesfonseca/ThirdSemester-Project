using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.User
{
    public record class RegisterUserDto(
        [Required][StringLength(100)] string Nome,
        [Required][StringLength(60)] string Email,
        [Required][MinLength(8)][MaxLength(20)] string Senha,
        [Required][MaxLength(1)] int Tipo);
}
