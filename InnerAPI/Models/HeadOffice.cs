namespace InnerAPI.Models
{
    public class HeadOffice : Institution
    {
        #region "Declaração de variáveis"
        List<Branch> branches;
        #endregion

        #region "Construtores"
        public HeadOffice() : base()
        {
            branches = new List<Branch>();
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
            branches = new List<Branch>();
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
            branches = new List<Branch>();
        }
        #endregion

        #region "Métodos Listas"
        public List<Branch> Branches { get { return branches; } }
        public void addBranch(Branch branch)
        {
            branches.Add(branch);
        }
        public void removeBranch(Branch branch)
        {
            branches.Remove(branch);
        }
        #endregion
    }
}
