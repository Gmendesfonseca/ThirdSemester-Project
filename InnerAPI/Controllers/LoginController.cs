using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Services;
using InnerAPI.Utils;
using System.Xml.Linq;
using System;

namespace InnerAPI.Controllers
{
    public static class LoginController
    {
        public static RouteGroupBuilder MapLoginEndpoint(this WebApplication app, SharedService sharedService)
        {
            var group = app.MapGroup("login").WithParameterValidation();

            //POST /login/headoffice
            group.MapPost("/headoffice", (LoginDto login) =>
            {
                // Crie uma instância de HeadOffice (ou obtenha-a de onde quer que esteja)
                var headOffice = new HeadOffice
                {
                    Id = 7,
                    Email = "nicolly.alcantara@fatec.sp.gov",
                    Password = "nicollyFatec"
                };

                // Verifica se o login é bem-sucedido usando o método Login
                if (headOffice.Login(login))
                {
                    // Se o login for bem-sucedido, retorne OK
                    return Results.Ok(new
                    {
                        success = true,
                        message = "Login successful",
                        user = new
                        {
                            // Você pode retornar informações adicionais do usuário, se necessário
                            headOffice.Id,
                            headOffice.Name,
                            headOffice.Email
                        }
                    });
                }
                else
                {
                    // Se o login falhar, retorne BadRequest
                    return Results.BadRequest(new { success = false, message = "User not found" });
                }
            });

            //POST /login/branch
            group.MapPost("/branch", (LoginDto login) =>
            {
                BranchServices user = new(sharedService);

                var institution = user.Login(login);

                if (institution == null)
                {
                    return Results.BadRequest(new { success = false, message = "User not found" });
                }
                return Results.Ok(new
                {
                    success = true,
                    message = "Login successful",
                    user = new
                    {
                        institution
                    }
                });
            });

            //POST /login/professor
            group.MapPost("/professor", (LoginDto login) =>
            {
                ProfessorServices user = new(sharedService);
                var professor = user.Login(login);
                if (professor == null)
                {
                    return Results.BadRequest(new { success = false, message = "User not found" });
                }
                return Results.Ok(new
                {
                    success = true,
                    message = "Login successful",
                    user = new
                    {
                        professor
                    }
                });
            });

            //POST /login/student
            group.MapPost("/student", (LoginDto login) =>
            {
                StudentServices user = new(sharedService);
                var student = user.Login(login);
                if (student == null)
                {
                    return Results.BadRequest(new { success = false, message = "User not found" });
                }
                return Results.Ok(new
                {
                    success = true,
                    message = "Login successful",
                    user = new
                    {
                        student
                    }
                });
            });

            return group;
        }
    }
}
