using InnerAPI.Models;
using InnerAPI.Dtos.User;


namespace InnerAPI.Controllers
{
    public static class UserController 
    {
        //const string GetNomeUsuarioEndpoint = "GetUsuario";

        //public static RouteGroupBuilder MapUsuariosEndpoints(this WebApplication app, SharedService sharedService)
        //{
        //    User user = new(sharedService);
        //    List<UserDto> usuarios = user.getUsers();
        //    var group = app.MapGroup("usuarios").WithParameterValidation();

        //    // GET /usuarios
        //    group.MapGet("/", () => usuarios);

        //    // GET /usuarios/{id}
        //    group.MapGet("/{id}", (uint id) =>
        //    {
        //        UserDto? usuario = usuarios.Find(usuario => usuario.Id == id);
        //        return usuario is null ? Results.NotFound() : Results.Ok(usuario);
        //    }).WithName(GetNomeUsuarioEndpoint);

        //    // POST /usuarios
        //    group.MapPost("/", (RegisterUserDto novoUsuario) =>
        //    {
        //        UserDto usuario = user.register(novoUsuario);
        //        return Results.CreatedAtRoute(GetNomeUsuarioEndpoint, usuario);
        //    });

        //    // PUT /usuarios
        //    group.MapPut("/{id}", (uint id, UpdateUserDto atualizarUsuario) =>
        //    {
        //        var index = usuarios.FindIndex(usuario => usuario.Id == id);

        //        if (index == -1)
        //        {
        //            return Results.NotFound();
        //        }

        //        usuarios[index] = new UserDto(
        //            (int)id,
        //            atualizarUsuario.Nome,
        //            atualizarUsuario.Email,
        //            atualizarUsuario.Senha);

        //        return Results.NoContent();
        //    });

        //    //DELETE /usuarios
        //    group.MapDelete("/{id}", (int id) =>
        //    {
        //        user.delete(id);
        //        return Results.NoContent();
        //    });

        //    return group;
        //}
    }
}
