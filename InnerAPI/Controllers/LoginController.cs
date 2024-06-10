using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Services;


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
                HeadOfficeServices user = new(sharedService);
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

            //POST /login/branch
            group.MapPost("/branch", (LoginDto login) =>
            {
                HeadOfficeServices user = new(sharedService);
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