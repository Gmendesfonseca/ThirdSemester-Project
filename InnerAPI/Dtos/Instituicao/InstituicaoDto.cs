using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Instituicao
{
    public record class InstituicaoDto(
         uint Id,
         string Name,
         string Email,
         string Password,
         string Domain,
         string Cnpj
    );
}
