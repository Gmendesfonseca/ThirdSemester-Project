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
            

            // POST /login
            group.MapPost("/", (LoginDto login) =>
            {
                User user = new(sharedService);
                if (login.type == 1)
                {
                    var institution = user.loginInstitution(login);
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
                            id = institution.Id, // replace with actual user id
                            name = institution.Name, // replace with actual user name
                            email = institution.Email
                        }

                    });
                }
                else if (login.type == 2)
                {
                    var professor = user.loginProfessor(login);
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
                            id = professor.Id, // replace with actual user id
                            name = professor.Name, // replace with actual user name
                            email = professor.Email
                        }

                    });
                }
                else if (login.type == 3)
                {
                    var student = user.loginStudent(login);
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
                            id = student.Id, // replace with actual user id
                            name = student.Name, // replace with actual user name
                            email = student.Email
                        }

                    });
                }
                else
                {
                    return Results.BadRequest(new { success = false, message = "Type incorrect" });
                }
            });

            return group;
        }
    }
}
