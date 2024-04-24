using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Aluno
{
    public record class RegisterAlunoDto
    (
        [Required][StringLength(100)] string Name,
        [Required][StringLength(60)] string Email,
        [Required][MinLength(8)][MaxLength(20)] string Password,
        [Required][MinLength(14)][MaxLength(20)] string Cpf);
}
