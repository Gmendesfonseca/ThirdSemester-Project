using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Usuarios;
using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    
    public static class InstitutionEndpoint
    {
        const string GetNameInstitutionEndpoint = "GetInstitution";
        private static readonly List<InstitutionDto> instituicoes = [];
        public static RouteGroupBuilder MapInstitutionEndpoint(this WebApplication app)
        {

            var group = app.MapGroup("institution").WithParameterValidation();

            //GET /institution
            group.MapGet("/", () => instituicoes);

            // GET /institution/{id}
            group.MapGet("/{id}", (uint id) =>
            {
                InstitutionDto? instituicao = instituicoes.Find(instituicao => instituicao.Id == id);
                return instituicao is null ? Results.NotFound() : Results.Ok(instituicao);
            }).WithName(GetNameInstitutionEndpoint);

            // POST /institution
            group.MapPost("/", (CreateInstitutionDto novoUsuario) =>
            {
                UsuarioDto usuario = new(
                    (uint)usuarios.Count + 1,
                    novoUsuario.Nome,
                    novoUsuario.Email,
                    novoUsuario.Senha);

                usuarios.Add(usuario);

                return Results.CreatedAtRoute(GetNomeUsuarioEndpoint, new { id = usuario.Id }, usuario);
            });

            // PUT /institution
            group.MapPut("/{id}", (uint id, AtualizarUsuarioDto atualizarUsuario) =>
            {
                var index = usuarios.FindIndex(usuario => usuario.Id == id);

                if (index == -1)
                {
                    return Results.NotFound();
                }

                usuarios[index] = new UsuarioDto(
                    id,
                    atualizarUsuario.Nome,
                    atualizarUsuario.Email,
                    atualizarUsuario.Senha);

                return Results.NoContent();
            });

            // DELETE /usuarios
            group.MapDelete("/{id}", (uint id) =>
            {
                usuarios.RemoveAll(usuario => usuario.Id == id);
                return Results.NoContent();
            });

            return group;
        }
    }
}
