﻿using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.Usuarios;
using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class UsuarioEndpoint
    {
        const string GetNomeUsuarioEndpoint = "GetUsuario";

        private static readonly List<InstitutionDto> instituicoes = [];

        private static readonly List<StudentDto> alunos = [];

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

    }
}
