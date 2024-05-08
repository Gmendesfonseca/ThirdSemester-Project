using InnerAPI.Dtos.Groups;
using InnerAPI.Dtos.Notification;
using InnerAPI.Dtos.Post;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Professor
{
    public record class RegisterProfessorDto
    (
        [Required] string Name,
        [Required][EmailAddress] string Email,
        [Required] string Password,
        [Required] string Matricula,
        [Required][StringLength(11)] string Cpf,
        DateOnly BirthDate,
        [Required] string Instituicao,
        [Required] string AreaLecionada,
        [Required] string Formacao
    );
}

