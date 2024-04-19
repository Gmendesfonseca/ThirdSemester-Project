using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Usuarios
{
    public record class UsuarioDto(
        uint Id,
        string Nome,
        string Email,
        string Senha
        );
}
