using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Aluno
{
    public record class RegisterStudentDto
    (
        [Required][StringLength(100)] string Name,
        [Required][StringLength(60)] string Email,
        [Required][MinLength(8)][MaxLength(20)] string Password,
        [Required][MinLength(14)][MaxLength(20)] string Cpf,
        [Required][MaxLength(1)] int Tipo);
}
