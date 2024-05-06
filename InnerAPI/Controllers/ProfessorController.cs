using InnerAPI.Services;
using InnerAPI.Models;
using InnerAPI.Dtos.Professor;

namespace InnerAPI.Controllers
{
    public static class ProfessorController 
    {
        public static RouteGroupBuilder MapProfessorEndpoint(this WebApplication app, SharedService sharedService)
        {
            ProfessorServices professorServices = new ProfessorServices(sharedService);
            var group = app.MapGroup("professor").WithParameterValidation();

            // GET /professor/{id}
            group.MapGet("{id}", (int id) =>
            {
                return Results.Ok(professorServices.GetProfessors().FirstOrDefault(s => s.Id == id));
            });

            // POST /professor
            group.MapPost("", (RegisterProfessorDto professor) =>
            {
                professorServices.Register(professor);
                return Results.Ok(professor);
            });

            // PUT /professor
            group.MapPut("", (Professor professor) =>
            {
                var professorToUpdate = professorServices.GetProfessors().FirstOrDefault(s => s.Id == professor.Id);
                professorToUpdate = professor;
                return Results.Ok(professorToUpdate);
            });

            //DELETE /professor
            group.MapDelete("{id}", (int id) =>
            {
                bool deleted = professorServices.Delete(id);
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
