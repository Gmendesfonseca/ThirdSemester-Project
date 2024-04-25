using InnerAPI.Dtos.Login;

namespace InnerAPI.Endpoints
{
    public static class LoginEndpoint
    {
        public static RouteGroupBuilder MapLoginEndpoint(this WebApplication app)
        {
            var group = app.MapGroup("login").WithParameterValidation();

            // POST /login
            group.MapPost("/student", (LoginDto loginDto) =>
            {
                var user = usuarios.FirstOrDefault(u => u.Email == loginDto.Email && u.Senha == loginDto.Password);

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

            // POST /login
            group.MapPost("/institution", (LoginDto loginDto) =>
            {
                var user = instituicoes.FirstOrDefault(u => u.Email == loginDto.Email && u.Password == loginDto.Password);

                if (user != null)
                {
                    return Results.Ok(new
                    {
                        success = true,
                        message = "Login successful",
                        user = new
                        {
                            id = user.Id, // replace with actual user id
                            name = user.Name, // replace with actual user name
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
