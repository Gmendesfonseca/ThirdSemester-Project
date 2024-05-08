using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.Professor;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class ProfessorServices : UserServices
    {
        List<Professor> professors;
        List<Institution> institutions;
        public ProfessorServices(SharedService _sharedService)
        {
            institutions = _sharedService.Institutions;
        }

        public Professor Register(RegisterProfessorDto register)
        {
            var domain = register.Email.Split('@')[1]; 

            var institution = institutions.FirstOrDefault(i => i.Domain == domain);
            professors = institution.Professors;
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }

            // Verifica se o professor já existe
            var existingProfessor = professors.Exists(r => r.Matricula == register.Matricula || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingProfessor)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            // Cria e adiciona o novo professor à instituição correta
            uint id = (uint)professors.Count + 1;
            Professor newProfessor = new Professor(id, register.Name, register.Email, register.Password, register.Matricula, register.Cpf, register.BirthDate, register.Instituicao, register.AreaLecionada, register.Formacao);
            institution.Professors.Add(newProfessor);
            professors.Add(newProfessor);

            return newProfessor;
        }

        public Professor Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;
            string domain = email.Split('@')[1];

            var institution = institutions.FirstOrDefault(i => i.Domain == domain);
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }

            Professor professor = institution.Professors.FirstOrDefault(p => p.Email == email && p.Password == password);

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

        public List<Professor> GetProfessors(string demail)
        {
            var domain = demail.Split('@')[1];
            professors = institutions.FirstOrDefault(i => i.Domain == domain).Professors;
            return professors;
        }

        public void Remover()
        {

        }
    }
}
