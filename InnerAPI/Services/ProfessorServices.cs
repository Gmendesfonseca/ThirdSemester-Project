using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.Professor;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class ProfessorServices
    {
        List<Professor> professors;
        List<Branch> institutions;
        public ProfessorServices(SharedService _sharedService)
        {
            institutions = _sharedService.Branches;
            professors = _sharedService.Professors;
        }

        public Professor Register(uint branchId, RegisterProfessorDto register)
        {
            var institution = institutions.FirstOrDefault(i => i.Id == branchId);
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }

            var existingProfessor = professors.Exists(r => r.Registration == register.Matricula || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingProfessor)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            uint id = (uint)professors.Count + 1;
            Professor newProfessor = new Professor(id, register.Name, register.Email, register.Password, register.Matricula, register.Cpf, register.BirthDate, register.Instituicao, register.AreaLecionada, register.Formacao);

            institution.addProfessor(newProfessor.Id);
            professors.Add(newProfessor);

            return newProfessor;
        }

        public Professor Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            var institution = GetBranch(email);
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }

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
            var existingProfessor = professors.FirstOrDefault(p => p.Id == id);
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

        public List<Professor> GetProfessors(string email)
        {
            Branch institution = GetBranch(email);
            return institution.Professors;
        }

        public Branch GetBranch(string email)
        {
            var domain = email.Split('@')[1];
            return institutions.FirstOrDefault(i => i.Domain == domain);
        }

        public void Remover()
        {

        }
    }
}
