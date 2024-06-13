using InnerAPI.Dtos;
using InnerAPI.Dtos.Branch;
using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class BranchServices
    {
        List<Branch> branches;
        List<HeadOffice> headOffices;

        public BranchServices(SharedService _sharedService)
        {
            branches = _sharedService.Branches;
            headOffices = _sharedService.HeadOffices;
        }

        public Branch Register(int headOfficeId,RegisterBranchDto register)
        {
            uint id = (uint)branches.Count + 1;
            string name = register.Name;
            string email = register.Email;
            string password = register.Password;
            string cnpj = register.Cnpj;

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            Branch newBranch = new Branch(id, name, email, password, cnpj);

            var headOffice = headOffices.FirstOrDefault(h => h.Id == headOfficeId);

            if (headOffice == null)
                throw new ArgumentException("HeadOffice não encontrado.");

            headOffice.addBranch(newBranch.Id);
            branches.Add(newBranch);

            return newBranch;
        }

        public Branch Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            Branch branch = branches.FirstOrDefault(i => i.Email == user.Email);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (branch == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (branch.Password != password)
                throw new ArgumentException("Senha incorreta.");

            return branch;
        }

        public Branch Update(int id, RegisterBranchDto register)
        {
            Branch Branch = branches.FirstOrDefault(i => i.Id == id);

            if (Branch == null)
                throw new ArgumentException("Usuário não encontrado.");

            Branch.Name = register.Name;
            Branch.Email = register.Email;
            Branch.Password = register.Password;
            Branch.Domain = register.Domain;
            Branch.CNPJ = register.Cnpj;

            return Branch;
        }

        public List<Student> GetStudents(int id)
        {
            var Branch = branches.FirstOrDefault(i => i.Id == id);
            return Branch.Students;
        }

        public List<Professor> GetProfessors(GetListDto getProfessorsDto)
        {
            var Branch = branches.FirstOrDefault(i => i.Name == getProfessorsDto.institutionName);
            return Branch.Professors;
        }

        public bool Delete(int id)
        { 
            branches.RemoveAll(usuario => usuario.Id == id); 
            return true; 
        }

        public void SuspenderAcesso()
        {

        }

        public void CriarGrupo()
        {

        }
    }
}
