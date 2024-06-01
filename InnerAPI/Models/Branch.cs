using InnerAPI.Dtos.Courses;
using InnerAPI.Dtos.Post;

namespace InnerAPI.Models
{
    public class Branch : Institution
    {
        #region "Declaração de variáveis"
        private List<CourseDto> courses;
        private readonly List<Student> students;
        private readonly List<Professor> professors;
        private Stack<Post> allPosts;
        #endregion

        #region "Construtores"
        public Branch() : base()
        {
            courses = new List<CourseDto>();
            students = new List<Student>();
            professors = new List<Professor>();
            allPosts = new Stack<Post>();
        }

        public Branch(uint id, string name, string email, string password, string address, DateOnly creationDate, string cnpj) : base()
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
            courses = new List<CourseDto>();
            students = new List<Student>();
            professors = new List<Professor>();
            allPosts = new Stack<Post>();
        }
        #endregion

        #region "Métodos Listas"
        public List<CourseDto> Courses
        {
            get { return courses; }
        }
        public void addCourse(CourseDto course)
        {
            courses.Add(course);
        }
        public void removeCourse(CourseDto course)
        {
            courses.Remove(course);
        }

        public List<Student> Students
        {
            get { return students; }
        }
        public void addStudent(Student student)
        {
            students.Add(student);
        }
        public void removeStudent(Student student)
        {
            students.Remove(student);
        }

        public List<Professor> Professors
        {
            get { return professors; }
        }
        public void addProfessor(Professor professor)
        {
            professors.Add(professor);
        }
        public void removeProfessor(Professor professor)
        {
            professors.Remove(professor);
        }

        public Stack<Post> AllPosts
        {
            get
            {
                List<Post> listPosts = new List<Post>();
                for (int i = 0; i < allPosts.Count; i++)
                {
                    listPosts.Add(allPosts.Pop());
                }
                return allPosts;
            }
        }
        public void addPost(Post post)
        {
            allPosts.Push(post);
        }
        public void removePost(Post post)
        {
            Stack<Post> tempStack = new Stack<Post>();
            while (allPosts.Count > 0)
            {
                Post currentPost = allPosts.Pop();
                if (currentPost != post)
                {
                    tempStack.Push(currentPost);
                }
            }
            while (tempStack.Count > 0)
            {
                allPosts.Push(tempStack.Pop());
            }
        }
        #endregion
    }
}
