using InnerAPI.Models;


namespace InnerAPI.Services
{
    public class SharedService
    {
        private static List<Branch> branches = new List<Branch>();
        private static List<HeadOffice> headOffices = new List<HeadOffice>();
        private static List<Professor> professors = new List<Professor>();
        private static List<Student> students = new List<Student>();

        public SharedService()
        {
            uint id = 0;
            string name = "Universidade Exemplo";
            string email = "universidade@exemplo.com";
            string password = "12345678";
            string cnpj = "12345678000199";
            string domain = "exemplo.com";


            branches.Add(new Branch(id, name, email, password, cnpj, domain));
        }

        public List<Branch> Branches { get { return branches; } }
        public List<HeadOffice> HeadOffices{ get { return headOffices; }}
        public List<Professor> Professors { get { return professors; }}
        public List<Student> Students{ get { return students; }}
        public void AddBranch(Branch institution){ branches.Add(institution); }
        
    }
}
