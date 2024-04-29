using InnerAPI.Dtos.Follower;
using InnerAPI.Dtos.Post;
using InnerAPI.Models;

namespace InnerAPI.Controllers
{
    public class SharedService
    {
        private List<User> users = new List<User>();
        private List<FollowerDto> friendships = new List<FollowerDto>();
        private List<PostDto> posts = new List<PostDto>();
        private static readonly List<Institution> institutions = new List<Institution>();
        private static readonly List<Student> students = new List<Student>();

        public void AddUser(User user)
        {
            users.Add(user);
        }

        public List<User> GetUsers()
        {
            return users;
        }
        public void AddInstitution(Institution institution)
        {
            institutions.Add(institution);
        }

        public List<Institution> GetInstitution()
        {
            return institutions;
        }
        public void AddStudent(Student institution)
        {
            students.Add(institution);
        }

        public List<Student> GetStudent()
        {
            return students;
        }
    }
}
