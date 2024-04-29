﻿using InnerAPI.Controllers;
using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.User;
using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class UserEndpoint
    {
        const string GetNomeUsuarioEndpoint = "GetUsuario";

        public static RouteGroupBuilder MapUsuariosEndpoints(this WebApplication app, SharedService sharedService)
        {
            UserController userController = new(sharedService);
            List<UserDto> usuarios = userController.getUsers();
            var group = app.MapGroup("usuarios").WithParameterValidation();

            // GET /usuarios
            group.MapGet("/", () => usuarios);

            // GET /usuarios/{id}
            group.MapGet("/{id}", (uint id) =>
            {
                UserDto? usuario = usuarios.Find(usuario => usuario.Id == id);
                return usuario is null ? Results.NotFound() : Results.Ok(usuario);
            }).WithName(GetNomeUsuarioEndpoint);

            // POST /usuarios
            group.MapPost("/", (RegisterUserDto novoUsuario) =>
            {
                UserDto usuario = userController.register(novoUsuario);
                return Results.CreatedAtRoute(GetNomeUsuarioEndpoint, usuario);
            });

            // PUT /usuarios
            group.MapPut("/{id}", (uint id, UpdateUserDto atualizarUsuario) =>
            {
                var index = usuarios.FindIndex(usuario => usuario.Id == id);

               if (index == -1)
               {
                    return Results.NotFound();
                }

                usuarios[index] = new UserDto(
                    (int)id,
                    atualizarUsuario.Nome,
                    atualizarUsuario.Email,
                    atualizarUsuario.Senha);

                return Results.NoContent();
            });

            //DELETE /usuarios
            group.MapDelete("/{id}", (int id) =>
            {
                userController.delete(id);
                return Results.NoContent();
            });

            return group;
        }
    }
}