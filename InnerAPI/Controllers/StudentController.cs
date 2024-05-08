using InnerAPI.Models;
using InnerAPI.Services;
using InnerAPI.Dtos.Login;
using Microsoft.AspNetCore.Mvc;
using InnerAPI.Dtos.Aluno;

namespace InnerAPI.Controllers
{
    public static class StudentController
    {
        public static RouteGroupBuilder MapStudentEndpoint(this WebApplication app, SharedService sharedServices)
        {
            StudentServices studentServices = new StudentServices(sharedServices);
            var group = app.MapGroup("student").WithParameterValidation();

            // GET /student/{id}
            group.MapGet("{id}", (int id, string domain) =>
            {
                return Results.Ok(studentServices.GetStudents(domain).FirstOrDefault(s => s.Id == id));
            });

            // GET /student/{id}/posts
            //group.MapGet("{id}/posts", (int id) =>
            //{
            //    Student student = studentServices.GetStudents().FirstOrDefault(s => s.Id == id);
            //    if (student == null)
            //    {
            //        return Results.NotFound();
            //    }
            //    return Results.Ok(student.Posts);
            //});

            // POST /student
            group.MapPost("", (RegisterStudentDto newStudent) =>
            {
                Student student = studentServices.Register(newStudent);

                return Results.Created($"/student/{student.Id}", student);
            });

            // PUT /student/{id}
            group.MapPut("{id}", (int id, Student updatedStudent) =>
            {
                var result = studentServices.Update(id, updatedStudent);
                if (result == null)
                {
                    return Results.NotFound();
                }
                return Results.Ok(result);
            });

            // DELETE /student/{id}
            group.MapDelete("{id}", (int id) =>
            {
                bool deleted = studentServices.Delete(id);
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
