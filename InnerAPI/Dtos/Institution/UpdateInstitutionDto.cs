using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Institution
{
    public record class UpdateInstitutionDto(
        [Required][StringLength(100)] string Nome,
        [Required][StringLength(60)] string Email,
        [Required][MinLength(8)][MaxLength(20)] string Senha,
        [Required][StringLength(60)] string Domain,
        [Required][MinLength(14)][MaxLength(14)] string Cnpj);
}
