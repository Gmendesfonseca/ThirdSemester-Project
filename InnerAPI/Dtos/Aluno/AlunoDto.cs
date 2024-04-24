using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Aluno
{
    public record class AlunoDto
    (
        uint Id,
        string Name,
        string Email,
        string Password,
        string Cpf
        );
}
