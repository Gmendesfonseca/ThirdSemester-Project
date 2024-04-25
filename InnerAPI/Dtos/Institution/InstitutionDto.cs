using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Institution
{
    public record class InstitutionDto(
         uint Id,
         string Name,
         string Email,
         string Password,
         string Domain,
         string Cnpj
    );
}
