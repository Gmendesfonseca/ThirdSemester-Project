using InnerAPI.Dtos.Login;

namespace InnerAPI.Models
{
    public class HeadOffice : Institution
    {
        #region "Declaração de variáveis"
        List<uint> branches;
        #endregion

        #region "Construtores"
        public HeadOffice() : base()
        {
            branches = new List<uint>();
        }

        public HeadOffice(uint id, string name, string email, string password, string address, DateOnly creationDate, string cnpj, string domain) : base()
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Online = false;
            Active = true;
            Address = address;
            CreationDate = creationDate;
            CNPJ = cnpj;
            Domain = domain;
            branches = new List<uint>();
        }
        public HeadOffice(uint id, string name, string email, string password, string cnpj, string domain) : base()
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Online = false;
            Active = true;
            CNPJ = cnpj;
            Domain = domain;
            branches = new List<uint>();
        }
        #endregion

        #region "Métodos Listas"
        public List<uint> Branches { get { return branches; } }
        public void addBranch(uint id)
        {
            branches.Add(id);
        }
        public void removeBranch(uint id)
        {
            branches.Remove(id);
        }
        #endregion
    }
}
