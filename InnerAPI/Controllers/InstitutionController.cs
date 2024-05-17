using InnerAPI.Dtos;
using InnerAPI.Dtos.Institution;
using InnerAPI.Models;
using InnerAPI.Services;
using InnerAPI.Utils;

namespace InnerAPI.Controllers
{
    public static class InstitutionController
    {
        const string GetNameInstitutionEndpoint = "GetInstitution";
        public static RouteGroupBuilder MapInstitutionEndpoint(this WebApplication app, SharedService sharedService)
        {
            var group = app.MapGroup("institution").WithParameterValidation();
            List<Branch> institutions = sharedService.Institutions;
            InstitutionServices institutionServices = new InstitutionServices(sharedService);

            //GET /institution/{id}
            group.MapGet("/{id}", (uint id) =>
            {
                Branch? institution = institutions.Find(institution => institution.Id == id);
                return institution is null ? Results.NotFound() : Results.Ok(institution);
            }).WithName(GetNameInstitutionEndpoint);

            //GET /institution/{id}/students
            group.MapGet("/{id}/students", (uint id) =>
            {
                Branch? institution = institutions.Find(institution => institution.Id == id);
                if (institution == null)
                {
                    return Results.BadRequest(new { success = false, message = "Institution not found" });
                }
                return Results.Ok(institution.Students);
            });

            //GET /institution/{id}/professors
            group.MapGet("/{id}/professors", (uint id) =>
            {
                Branch? institution = institutions.Find(institution => institution.Id == id);
                if (institution == null)
                {
                    return Results.BadRequest(new { success = false, message = "Institution not found" });
                }
                return Results.Ok(institution.Professors);
            });

            // POST /institution
            group.MapPost("", (RegisterInstitutionDto newInstitution) =>
            {
                var exists = institutions.Exists(r => r.Name == newInstitution.Name || r.Email == newInstitution.Email || r.CNPJ == newInstitution.Cnpj || r.Domain == newInstitution.Domain);
                if (!exists)
                {
                    var createdInstitution = institutionServices.Register(newInstitution);
                    return Results.CreatedAtRoute(GetNameInstitutionEndpoint, new { id = createdInstitution.Id }, createdInstitution);
                }
                else
                {
                    return Results.BadRequest(new { success = false, message = "Name, Email, CNPJ, or Domain already used" });
                }
            });

            // PUT /institution/{id}
            group.MapPut("/{id}", (uint id, UpdateInstitutionDto updateInstitution) =>
            {
                var index = institutions.FindIndex(institution => institution.Id == id);

                if (index == -1)
                {
                    return Results.NotFound();
                }

                institutions[index] = new Branch(
                    id,
                    updateInstitution.Name,
                    updateInstitution.Email,
                    updateInstitution.Password,
                    updateInstitution.Domain,
                    updateInstitution.Cnpj);

                return Results.NoContent();
            });

            // DELETE /institution/{id}
            group.MapDelete("/{id}", (int id) =>
            {
                bool deleted = institutionServices.Delete(id); // Corrigido para usar um método que retorna um booleano
                if (!deleted)
                {
                    return Results.NotFound();
                }
                return Results.NoContent();
            });

            return group;
        }
    }
}
