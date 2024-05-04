using InnerAPI.Dtos.Institution;
using InnerAPI.Models;
using InnerAPI.Services;
using InnerAPI.Utils;
using Microsoft.AspNetCore.Mvc;

namespace InnerAPI.Controllers
{
    public class InstitutionController : ControllerBase
    {
        // GET /institution
        // GET /institution/{id}
        // POST /institution
        // PUT /institution
        //DELETE /institution


        const string GetNameInstitutionEndpoint = "GetInstitution";
        public static RouteGroupBuilder MapInstitutionEndpoint(this WebApplication app, SharedService sharedService)
        {
            var group = app.MapGroup("institution").WithParameterValidation();

            Institution institution = new();
            //GET /institution
            //group.MapGet("/", () => instituicoes);

            //GET /institution/{id}
            group.MapGet("/{id}", (uint id) =>
            {
                Institution? instituicao = instituicoes.Find(instituicao => instituicao.IdInstituicao == id);
                return instituicao is null ? Results.NotFound() : Results.Ok(instituicao);
            }).WithName(GetNameInstitutionEndpoint);

            // POST /institution
            group.MapPost("/", (RegisterInstitutionDto novoUsuario) =>
            {

                userController.register(novoUsuario);
                Institution institution = instituicoes.Find(instituicoes => instituicoes._email == novoUsuario.Email);

                return Results.CreatedAtRoute(GetNameInstitutionEndpoint, new { id = institution.IdInstituicao }, institution);
            });

            // PUT /institution
            group.MapPut("/{id}", (uint id, UpdateInstitutionDto updateInstitution) =>
            {
                var index = instituicoes.FindIndex(institution => institution.IdInstituicao == id);

                if (index == -1)
                {
                    return Results.NotFound();
                }

                instituicoes[index] = new Institution(
                    (int)id,
                    updateInstitution.Nome,
                    updateInstitution.Email,
                    updateInstitution.Senha,
                    updateInstitution.Domain,
                    updateInstitution.Cnpj);

                return Results.NoContent();
            });

            // DELETE /usuarios
            group.MapDelete("/{id}", (int id) =>
            {
                userController.delete(id);
                institutionController.delete(id);
                return Results.NoContent();
            });

            return group;
        }

        public List<Institution> GetInstitution()
        {
            return this.institutions;
        }

        public void delete(int id)
        {
            var index = institutions.FindIndex(institution => institution.Id == id);
            if (index == -1)
            {
                throw new ArgumentException("Institution not found");
            }
            institutions.RemoveAt(index);
        }
    }
}
