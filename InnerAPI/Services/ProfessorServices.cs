using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.Professor;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class ProfessorServices
    {
        List<Professor> professors;
        List<Institution> institutions;
        public ProfessorServices(SharedService _sharedService)
        {
            professors = _sharedService.Professors;
            institutions = _sharedService.Institutions;
        }

        public Professor Register(RegisterProfessorDto register)
        {
            uint id = (uint)professors.Count + 1;
            string name = register.Name;
            string email = register.Email;
            string password = register.Password;
            string cpf = register.Cpf;
            string domain = email.Split('@')[1];
            var institution = institutions.FirstOrDefault(i => i.Domain == domain);
            int type = 2;

            var existingUser = professors.Exists(r => r.Name == register.Name || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            Professor newProfessor = new Professor();

            professors.Add(newProfessor);

            return newProfessor;
        }

        public Professor Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;
            
            Professor professor = professors.FirstOrDefault(p => p.Email == email && p.Password == password);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (professor == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (professor.Password != password)
                throw new ArgumentException("Senha incorreta.");

            return professor;
        }

        public Professor Update(int id, RegisterProfessorDto professor)
        {
            var existingProfessor = institutions.SelectMany(i => i.Professors).FirstOrDefault(p => p.Id == id);
            if (existingProfessor == null)
            {
                throw new ArgumentException("Professor não encontrado.");
            }

            existingProfessor.Name = professor.Name;
            existingProfessor.Email = professor.Email;
            existingProfessor.Password = professor.Password;
            existingProfessor.CPF = professor.Cpf;

            return existingProfessor;
        }

        public bool Delete(int id)
        { institutions.SelectMany(i => i.Professors).ToList().RemoveAll(usuario => usuario.Id == id); return true; }

        public List<Professor> GetProfessors()
        {
            return professors;
        }

        public void Remover()
        {

        }
    }
}
