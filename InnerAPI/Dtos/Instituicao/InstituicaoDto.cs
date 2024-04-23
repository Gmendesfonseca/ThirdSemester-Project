using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Instituicao
{
    public record class InstituicaoDto(
         string Name,
         string Email,
         string Password,
         string Domain,
         string Cnpj
    );
}
