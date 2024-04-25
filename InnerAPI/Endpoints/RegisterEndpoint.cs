using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Institution;

namespace InnerAPI.Endpoints
{
    public static class RegisterEndpoint
    {
        public static RouteGroupBuilder MapRegisterEndpoint(this WebApplication app)
        {

            var group = app.MapGroup("register").WithParameterValidation();

            group.MapPost("/institution", (CreateInstitutionDto registerDto) =>
            {
                var register = instituicao.Exists(r => r.Name == registerDto.Name || r.Email == registerDto.Email || r.Cnpj == registerDto.Cnpj || r.Domain == registerDto.Domain);

                if (!register)
                {
                    InstitutionDto instituicaoDto = new InstituicaoDto(
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

            group.MapPost("/student", (CreateStudentDto registerDto) =>
            {
                var register = alunos.Exists(r => r.Name == registerDto.Name || r.Email == registerDto.Email || r.Cpf == registerDto.Cpf);

                if (!register)
                {
                    StudentDto alunoDto = new AlunoDto(
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
