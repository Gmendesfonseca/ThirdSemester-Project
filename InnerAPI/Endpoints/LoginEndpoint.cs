using InnerAPI.Controllers;
using InnerAPI.Dtos.Login;

namespace InnerAPI.Endpoints
{
    public static class LoginEndpoint
    {
        public static RouteGroupBuilder MapLoginEndpoint(this WebApplication app, SharedService sharedService)
        {
            var group = app.MapGroup("login").WithParameterValidation();
            UserController userController = new(sharedService);
            InstitutionController institutionController = new(sharedService);
            StudentController studentController = new(sharedService);

            // POST /login
            group.MapPost("/", (LoginDto loginDto) =>
            {
                var user = userController.getUsers().FirstOrDefault(u => u.Email == loginDto.Email && u.Password == loginDto.Password);

                if (user != null)
                {
                    if(user.Type == 1)
                    {
                        var institution = institutionController.GetInstitution().FirstOrDefault(i => i.Email == user.Email);
                        return Results.Ok(new
                        {
                            success = true,
                            message = "Login successful",
                            user = new
                            {
                                id = user.Id, // replace with actual user id
                                name = user.Nome, // replace with actual user name
                                email = user.Email
                            }

                        });
                    } else if(user.Type == 2    )
                    {
                        var student = studentController.GetStudents().FirstOrDefault(s => s.Email == user.Email);
                        return Results.Ok(new
                        {
                            success = true,
                            message = "Login successful",
                            user = new
                            {
                                id = user.Id, // replace with actual user id
                                name = user.Nome, // replace with actual user name
                                email = user.Email
                            }

                        });
                    }
                }
                else
                {
                    return Results.BadRequest(new { success = false, message = "Email or password is incorrect" });
                }
            });

            // POST /login
            group.MapPost("/", (LoginDto loginDto) =>
            {
                var user = userController.getUsers().FirstOrDefault(u => u.Email == loginDto.Email && u.Password == loginDto.Password);

                if (user != null)
                {
                    return Results.Ok(new
                    {
                        success = true,
                        message = "Login successful",
                        user = new
                        {
                            id = user.Id, // replace with actual user id
                            name = user.Nome, // replace with actual user name
                            email = user.Email
                        }

                    });
                }
                else
                {
                    return Results.BadRequest(new { success = false, message = "Email or password is incorrect" });
                }
            });

            return group;
        }
    }
}
