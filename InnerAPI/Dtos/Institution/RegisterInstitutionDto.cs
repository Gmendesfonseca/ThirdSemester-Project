using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Institution
{
    public record class RegisterInstitutionDto
    (
        [Required][StringLength(100)] string Name,
        [Required][StringLength(60)]string Email,
        [Required][MinLength(8)][MaxLength(20)] string Password,
        [Required][MinLength(8)][MaxLength(20)]string Domain,
        [Required][MinLength(14)][MaxLength(20)] string Cnpj);
}
