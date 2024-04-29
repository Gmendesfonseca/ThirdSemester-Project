using InnerAPI.Dtos.Follower;
using InnerAPI.Dtos.Post;
using InnerAPI.Dtos.User;
using InnerAPI.Models;

namespace InnerAPI.Controllers
{
    public class SharedService
    {
        private List<UserDto> users = new List<UserDto>();
        private List<FollowerDto> friendships = new List<FollowerDto>();
        private List<PostDto> posts = new List<PostDto>();
        private static readonly List<Institution> institutions = new List<Institution>();
        private static readonly List<Student> students = new List<Student>();

        public void AddUser(UserDto user)
        {
            users.Add(user);
        }

        public List<UserDto> GetUsers()
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
