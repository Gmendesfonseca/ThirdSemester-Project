using InnerAPI.Dtos.Usuarios;

public static class LoginEndpoint
{
    private static readonly List<UsuarioDto> usuarios =
        [
        new(0, "Felipe", "felipe.monteiro01@fatec.sp.gov.br", "12345678"),
        new(1, "Pedro", "pedro.domingos@fatec.sp.gov.br", "90123456"),
        new(2, "Bruno", "bruno.beserra@fatec.sp.gov.br", "678901234")
        ];

    public static RouteGroupBuilder MapLoginEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("login").WithParameterValidation();

    // POST /login
    group.MapPost("", (LoginDto loginDto) =>
    {
        bool loginSuccessful = VerificarLogin(loginDto.Email, loginDto.Password);

        if (loginSuccessful)
        {
            return Results.Ok(new { success = true, message = "Login successful" });
        }
        else
        {
            return Results.BadRequest(new { success = false, message = "Email or password is incorrect" });
        }
    });

        return group;
    }

    public static bool VerificarLogin(string email, string senha)
    {
        foreach (var usuario in usuarios)
        {
            if (usuario.Email == email && usuario.Senha == senha)
            {
                Console.WriteLine("Login feito com sucesso.");
                return true;
            }
        }

        Console.WriteLine("Email ou senha incorretos.");
        return false;
    }
}