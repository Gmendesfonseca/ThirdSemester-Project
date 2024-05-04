using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.Professor;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class ProfessorServices
    {
        public Professor register(RegisterProfessorDto register)
        {
            uint id = (uint)professors.Count + 1;
            string name = register.Name;
            string cpf = register.Cpf;
            int type = 2;


            var existingUser = professors.Exists(r => r.Name == register.Name || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            Professor newProfessor = new Professor(id, name, email, password, cpf);

            professors.Add(newProfessor);
            currentUser = idUser;

            return newProfessor;
        }

        public Professor login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            Professor professor = institutions.SelectMany(i => i.Professors).FirstOrDefault(p => p.Email == user.Email);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (professor == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (professor.Password != password)
                throw new ArgumentException("Senha incorreta.");

            currentUser = (int)professor.Id;

            return professor;
        }

        public void delete(int id)
        { institutions.SelectMany(i => i.Professors).ToList().RemoveAll(usuario => usuario.Id == id); }
    }
}
