using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Aluno
{
    public record class RegisterStudentDto
    (
        [Required][StringLength(100)] string Name,
        [Required][StringLength(100)][EmailAddress] string Email,
        [Required][StringLength(100)] string Password,
        [Required][StringLength(20)] string Matricula,
        [Required][StringLength(11)] string Cpf,
        [Required] DateOnly BirthDate,
        [Required][StringLength(100)] string Instituicao,
        [Required][StringLength(100)] string Curso,
        [Required][StringLength(50)] string Periodo,
        [Required] uint pontuacao);
}
