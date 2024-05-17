using InnerAPI.Dtos;
using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class InstitutionServices : UserServices
    {
        List<Branch> institutions;

        public InstitutionServices(SharedService _sharedService)
        {
            institutions = _sharedService.Institutions;
        }

        public Branch Register(RegisterInstitutionDto register)
        {
            uint id = (uint)institutions.Count + 1;
            string name = register.Name;
            string email = register.Email;
            string password = register.Password;
            string domain = register.Domain;
            string cnpj = register.Cnpj;
            int type = 1;

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            var existingUser = institutions.Exists(r => r.Name == register.Name || r.Email == register.Email || r._cnpj == register.Cnpj || r._domain == register.Domain);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            Branch newInstitution = new Branch(id, name, email, password, cnpj, domain);

            institutions.Add(newInstitution);

            return newInstitution;
        }

        public Branch Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            Branch institution = institutions.FirstOrDefault(i => i.Email == user.Email);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (institution == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (institution.Password != password)
                throw new ArgumentException("Senha incorreta.");

            return institution;
        }

        public Branch Update(int id, RegisterInstitutionDto register)
        {
            Branch institution = institutions.FirstOrDefault(i => i.Id == id);

            if (institution == null)
                throw new ArgumentException("Usuário não encontrado.");

            institution.Name = register.Name;
            institution.Email = register.Email;
            institution.Password = register.Password;
            institution.Domain = register.Domain;
            institution.CNPJ = register.Cnpj;

            return institution;
        }

        public List<Student> GetStudents(int id)
        {
            var institution = institutions.FirstOrDefault(i => i.Id == id);
            return institution.Students;
        }

        public List<Professor> GetProfessors(GetListDto getProfessorsDto)
        {
            var institution = institutions.FirstOrDefault(i => i.Name == getProfessorsDto.institutionName);
            return institution.Professors;
        }

        public bool Delete(int id)
        { institutions.RemoveAll(usuario => usuario.Id == id); return true; }

        public void SuspenderAcesso()
        {

        }

        public void CriarGrupo()
        {

        }

    }
}
