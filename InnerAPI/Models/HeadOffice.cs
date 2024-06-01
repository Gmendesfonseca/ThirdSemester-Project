namespace InnerAPI.Models
{
    public class HeadOffice : Institution
    {
        #region "Declaração de variáveis"
        List<Branch> branches;
        string _domain;
        #endregion

        #region "Construtores"
        public HeadOffice() : base()
        {
            branches = new List<Branch>();
            _domain = "";
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
            _domain = domain;
            branches = new List<Branch>();
        }
        #endregion

        #region "Propriedades"
        public string Domain
        {
            get { return _domain; }
            set { _domain = value; }
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
