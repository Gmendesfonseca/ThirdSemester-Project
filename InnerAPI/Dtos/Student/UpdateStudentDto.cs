using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Student
{
    public class UpdateStudentDto
    (
        [Required][StringLength(100)] string Nome,
        [Required][StringLength(60)] string Email,
        [Required][MinLength(8)][MaxLength(20)] string Senha
    );
}
