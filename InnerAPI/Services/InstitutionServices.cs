using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class InstitutionServices : UserServices, ICRUD
    {
        public Institution Register(RegisterInstitutionDto register)
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

            var existingUser = institutions.Exists(r => r.Name == register.Name || r._email == register.Email || r._cnpj == register.Cnpj || r._domain == register.Domain);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            Institution newInstitution = new Institution(id, name, email, password, cnpj, domain);

            institutions.Add(newInstitution);
            //currentUser = id;

            return newInstitution;
        }

        public Institution Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            Institution institution = institutions.FirstOrDefault(i => i.Email == user.Email);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (institution == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (institution.Password != password)
                throw new ArgumentException("Senha incorreta.");

            currentUser = (int)institution.Id;

            return institution;
        }

        public void Delete(int id)
        { institutions.RemoveAll(usuario => usuario.Id == id); }

    }
}
