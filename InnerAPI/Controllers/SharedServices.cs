using InnerAPI.Dtos.Follower;
using InnerAPI.Dtos.Post;
using InnerAPI.Dtos.User;
using InnerAPI.Model;
using InnerAPI.Models;

namespace InnerAPI.Controllers
{
    public class SharedService
    {
        private List<UserDto> users = new List<UserDto>();
        private List<FollowerDto> friendships = new List<FollowerDto>();
        private Stack<PostDto> posts = new Stack<PostDto>();
        private static readonly List<Institution> institutions = new List<Institution>();
        private static readonly List<Student> students = new List<Student>();
        private static readonly List<Professor> professors = new List<Professor>();

        public void AddUser(UserDto user)
        {
            users.Add(user);
        }
        public List<UserDto> GetUsers()
        {
            return users;
        }

        public List<Institution> GetInstitution()
        {
            return institutions;
        }
        public void AddInstitution(Institution institution)
        {
            institutions.Add(institution);
        }

        public void AddProfessor(Professor professor)
        {
            professors.Add(professor);
        }
        public List<Professor> GetProfessor()
        {
            return professors;
        }
        
        public void AddStudent(Student student)
        {
            students.Add(student);
        }
        public List<Student> GetStudent()
        {
            return students;
        }
    }
}
