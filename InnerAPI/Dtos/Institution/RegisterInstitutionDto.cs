using InnerAPI.Dtos.Courses;
using InnerAPI.Dtos.Groups;
using InnerAPI.Dtos.Notification;
using InnerAPI.Dtos.Post;
using InnerAPI.Dtos.Student;
using InnerAPI.Dtos.Professor;
using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Institution
{
    public record class RegisterInstitutionDto
    (
        [Required] uint Id,
        [Required][StringLength(100)] string Name,
        [Required][StringLength(60)][EmailAddress] string Email,
        [Required][MinLength(8)][MaxLength(20)] string Password,
        [Required][StringLength(50)] string Domain,
        [Required][StringLength(14)] string Cnpj,
        [StringLength(100)] string? LocalidadeInstituicao = null,
        DateOnly? DataCriacao = null
        //List<CourseDto>? Courses = null,
        //List<StudentDto>? Students = null,
        //List<ProfessorDto>? Professors = null
    );
}
