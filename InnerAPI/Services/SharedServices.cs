using InnerAPI.Models;
using InnerAPI.Models.Chat;


namespace InnerAPI.Services
{
    public class SharedService
    {
        private static List<Branch> branches = new List<Branch>();
        private static List<HeadOffice> headOffices = new List<HeadOffice>();
        private static List<Professor> professors = new List<Professor>();
        private static List<Student> students = new List<Student>();
        private static List<Post> posts = new List<Post>();
        private static List<Chat> chats = new List<Chat>();

        public SharedService()
        {
            uint id = 0;
            string name = "Universidade Exemplo";
            string email = "universidade@exemplo.com";
            string password = "12345678";
            string cnpj = "12345678000199";
            string domain = "exemplo.com";


            headOffices.Add(new HeadOffice(id, name, email, password, cnpj, domain));
            branches.Add(new Branch(id, name, email, password, cnpj));
        }

        public List<Branch> Branches { get { return branches; } }
        public List<HeadOffice> HeadOffices{ get { return headOffices; }}
        public List<Professor> Professors { get { return professors; }}
        public List<Student> Students{ get { return students; }}
        public List<Post> Posts { get { return posts; } }
        public List<Chat> Chat { get { return chats; } }
        public void AddBranch(Branch institution){ branches.Add(institution); }

        // Novo método GetUserById
        public UserType GetUserById(int id)
        {
            var user = headOffices.FirstOrDefault(h => h.Id == id)
                ?? branches.FirstOrDefault(b => b.Id == id)
                ?? professors.FirstOrDefault(p => p.Id == id)
                ?? students.FirstOrDefault(s => s.Id == id);

            if (user == null)
            {
                Console.WriteLine("nenhum usuário for encontrado");
                return null;
            }

            return new UserType
            {
                Id = user.Id,
                Name = user.Name,
                Image = user.Image,
                AccountType = user switch
                {
                    HeadOffice => AccountType.HEADOFFICE,
                    Branch => AccountType.BRANCH,
                    Professor => AccountType.PROFESSOR,
                    Student => AccountType.STUDENT,
                    _ => throw new InvalidOperationException("Tipo de usuário desconhecido.")
                }
            };
        }
    }
}
