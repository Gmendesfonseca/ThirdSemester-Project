using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Instituicao;
using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.Usuarios;
using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class UsuarioEndpoint
    {
        const string GetNomeUsuarioEndpoint = "GetUsuario";

        private static readonly List<UsuarioDto> usuarios =
            [
            new(0, "Felipe", "felipe.monteiro01@fatec.sp.gov.br", "12345678"),
            new(1, "Pedro", "pedro.domingos@fatec.sp.gov.br", "90123456"),
            new(2, "Bruno", "bruno.beserra@fatec.sp.gov.br", "678901234")
            ];

        private static readonly List<InstituicaoDto> instituicao = [];

        private static readonly List<AlunoDto> alunos = [];

        public static RouteGroupBuilder MapUsuariosEndpoints(this WebApplication app)
        {
            var group = app.MapGroup("usuarios").WithParameterValidation();

            // GET /usuarios
            group.MapGet("/", () => usuarios);

            // GET /usuarios/{id}
            group.MapGet("/{id}", (uint id) =>
            {
                UsuarioDto? usuario = usuarios.Find(usuario => usuario.Id == id);
                return usuario is null ? Results.NotFound() : Results.Ok(usuario);
            }).WithName(GetNomeUsuarioEndpoint);

            // POST /usuarios
            group.MapPost("/", (CriarUsuarioDto novoUsuario) =>
            {
                UsuarioDto usuario = new(
                    (uint)usuarios.Count + 1,
                    novoUsuario.Nome,
                    novoUsuario.Email,
                    novoUsuario.Senha);

                usuarios.Add(usuario);

                return Results.CreatedAtRoute(GetNomeUsuarioEndpoint, new { id = usuario.Id }, usuario);
            });

            // PUT /usuarios
            group.MapPut("/{id}", (uint id, AtualizarUsuarioDto atualizarUsuario) =>
            {
                var index = usuarios.FindIndex(usuario => usuario.Id == id);

                if (index == -1)
                {
                    return Results.NotFound();
                }

                usuarios[index] = new UsuarioDto(
                    id,
                    atualizarUsuario.Nome,
                    atualizarUsuario.Email,
                    atualizarUsuario.Senha);

                return Results.NoContent();
            });

            // DELETE /usuarios
            group.MapDelete("/{id}", (uint id) =>
            {
                usuarios.RemoveAll(usuario => usuario.Id == id);
                return Results.NoContent();
            });

            return group;
        }

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
                var user = instituicao.FirstOrDefault(u => u.Email == loginDto.Email && u.Password == loginDto.Password);

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

        public static RouteGroupBuilder MapRegisterEndpoint(this WebApplication app) { 

            var group = app.MapGroup("register").WithParameterValidation();
        
            group.MapPost("/institution", (RegisterInstituicaoDto registerDto) =>
            {
                var register = instituicao.Exists(r => r.Name == registerDto.Name || r.Email == registerDto.Email || r.Cnpj == registerDto.Cnpj || r.Domain == registerDto.Domain);

                if (!register)
                {
                    InstituicaoDto instituicaoDto = new InstituicaoDto(
                        (uint)usuarios.Count + 1,
                        registerDto.Name,
                        registerDto.Email,
                        registerDto.Password,
                        registerDto.Domain,
                        registerDto.Cnpj);

                    instituicao.Add(instituicaoDto);
                    return Results.Ok(new
                    {
                        success = true,
                        message = "Register successful",
                    });
                }
                else
                {
                    return Results.BadRequest(new { success = false, message = "Name, Email, CNPJ or Domain already used" });
                }
            });

            

            group.MapPost("/student", (RegisterAlunoDto registerDto) =>
            {
                var register = alunos.Exists(r => r.Name == registerDto.Name || r.Email == registerDto.Email || r.Cpf == registerDto.Cpf);

                if (!register)
                {
                    AlunoDto alunoDto = new AlunoDto(
                        (uint)usuarios.Count + 1,
                        registerDto.Name,
                        registerDto.Email,
                        registerDto.Password,
                        registerDto.Cpf);

                    alunos.Add(alunoDto);
                    return Results.Ok(new
                    {
                        success = true,
                        message = "Register successful",
                    });
                }
                else
                {
                    return Results.BadRequest(new { success = false, message = "Name, Email, CNPJ or Domain already used" });
                }
            });


            return group;
        }
    }
}
