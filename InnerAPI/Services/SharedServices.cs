using InnerAPI.Dtos.Follower;
using InnerAPI.Dtos.Groups;
using InnerAPI.Dtos.Notification;
using InnerAPI.Dtos.Post;
using InnerAPI.Models;
using InnerAPI.Utils;
using System.Xml.Linq;

namespace InnerAPI.Services
{
    public class SharedService
    {
        private List<FollowerDto> friendships = new List<FollowerDto>();
        private Stack<PostDto> posts = new Stack<PostDto>();
        private static List<Institution> institutions = new List<Institution>();
        private static List<Student> students = new List<Student>();
        private static List<Professor> professors = new List<Professor>();

        public SharedService()
        {
            uint id = 0;
            string name = "Universidade Exemplo";
            string email = "universidade@exemplo.com";
            string password = "12345678";
            string cnpj = "12345678000199";
            string domain = "exemplo.com";


            institutions.Add(new Institution(id, name, email, password, cnpj, domain));
        }

        public List<Institution> Institutions { get { return institutions; } }
        public void AddInstitution(Institution institution){ institutions.Add(institution); }
        
        public List<Professor> Professors{ get { return professors; } }
        public void AddProfessor(Professor professor){ professors.Add(professor); }

        public List<Student> Students{get { return students; } }
        public void AddStudent(Student student){ students.Add(student); }

        public Stack<PostDto> Posts { get { return posts; } }
        public void AddPost(PostDto post) { posts.Push(post); }
    }
}
