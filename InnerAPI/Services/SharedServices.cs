using InnerAPI.Models;
using InnerAPI.Models.Chat;
using InnerAPI.Utils;
using System.Net;
using static System.Net.Mime.MediaTypeNames;


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
            string address = "Rua Exemplo, 123";
            DateOnly creationDate = new DateOnly(2021, 1, 1);
            string image = "caminho/para/imagem.jpg"; // Defina o caminho da imagem
            string about = "Sobre a instituição"; // Descrição breve

            // Exemplo de HeadOffice
            headOffices.Add(new HeadOffice(id, name, password, email, image, about, address, creationDate, cnpj, domain));

            // Exemplo de Branch
            branches.Add(new Branch(id, name, password, email, image, about, address, creationDate, cnpj, domain));

            // Exemplo de Professor
            string registration = "12345";
            string cpf = "12345678900";
            DateOnly birthDate = new DateOnly(1980, 1, 1);
            string institution = "Instituição Exemplo";
            string areaLecionada = "Matemática";
            string formacao = "Doutorado";
            professors.Add(new Professor(id, name, password, email, image, about, registration, cpf, birthDate, institution, areaLecionada, formacao));

            // Exemplo de Student
            string matricula = "2021001234";
            string curso = "Ciência da Computação";
            string periodo = "Noturno";
            uint pontuacao = 100;
            students.Add(new Student(id, name, password, email, image, about, matricula, cpf, birthDate, institution, curso, periodo, pontuacao));
        }


        public List<Branch> Branches { get { return branches; } }
        public List<HeadOffice> HeadOffices{ get { return headOffices; }}
        public List<Professor> Professors { get { return professors; }}
        public List<Student> Students{ get { return students; }}
        public List<Post> Posts { get { return posts; } }
        public List<Chat> Chat { get { return chats; } }
        public void AddBranch(Branch institution){ branches.Add(institution); }

        // Novo método GetUserById
        //public UserType GetUserById(int id, string accountType)
        //{
        //    if
        //    var user = headOffices.FirstOrDefault(h => h.Id == id)
        //        ?? branches.FirstOrDefault(b => b.Id == id)
        //        ?? professors.FirstOrDefault(p => p.Id == id)
        //        ?? students.FirstOrDefault(s => s.Id == id);

        //    if (user == null)
        //    {
        //        Console.WriteLine("nenhum usuário for encontrado");
        //        return null;
        //    }

        //}
    }
}
