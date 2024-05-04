using InnerAPI.Controllers;
using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Institution;
using InnerAPI.Models;
using InnerAPI.Services;

namespace InnerAPI.Endpoints
{
    public static class RegisterEndpoint
    {
        public static RouteGroupBuilder MapRegisterEndpoint(this WebApplication app, SharedService sharedService)
        {
            InstitutionController institutionController = new(sharedService);
            UserController userController = new(sharedService);
            var group = app.MapGroup("register").WithParameterValidation();


            group.MapPost("/institution", (RegisterInstitutionDto newInstitution) =>
            {
                var exists = institutionController.GetInstitution().Exists(r => r.NomeInstituicao == newInstitution.Name || r._email == newInstitution.Email || r._cnpj == newInstitution.Cnpj || r._domain == newInstitution.Domain);

                if (!exists)
                {
                    userController.register(newInstitution);
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
            /*
            group.MapPost("/student", (RegisterStudentDto registerDto) =>
            {
                var register = alunos.getUsers().Exists(r => r.Name == registerDto.Name || r.Email == registerDto.Email || r.Cpf == registerDto.Cpf);

                if (!register)
                {
                    StudentDto alunoDto = new StudentDto(
                        (uint)data.getUsers().Count + 1,
                        registerDto.Name,
                        registerDto.Email,
                        registerDto.Password,
                        registerDto.Cpf);

                    int id = data.getUsers().Count + 1;
                    alunos.addUser(id,registerDto.Name,registerDto.Email,registerDto.Password);
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
            });*/


            return group;
        }
    }
}
