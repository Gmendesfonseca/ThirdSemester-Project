using InnerAPI.Dtos.Courses;
using InnerAPI.Dtos.Post;

namespace InnerAPI.Models
{
    public class Branch : Institution
    {
        #region "Declaração de variáveis"
        private List<CourseDto> courses;
        private readonly List<uint> students;
        private readonly List<uint> professors;
        private Stack<uint> feed;
        #endregion

        #region "Construtores"
        public Branch() : base()
        {
            courses = new List<CourseDto>();
            students = new List<uint>();
            professors = new List<uint>();
            feed = new Stack<uint>();
        }

        public Branch(uint id, string name, string email, string password, string cnpj) : base()
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Online = false;
            Active = true;
            CNPJ = cnpj;
            Domain = email.Split('@')[1];
            courses = new List<CourseDto>();
            students = new List<uint>();
            professors = new List<uint>();
            feed = new Stack<uint>();
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
            students = new List<uint>();
            professors = new List<uint>();
            feed = new Stack<uint>();
        }
        #endregion

        #region "Métodos Listas"
        public List<CourseDto> Courses
        {
            get { return courses; }
        }

        public List<uint> Students
        {
            get { return students; }
        }

        public List<uint> Professors
        {
            get { return professors; }
        }

        public Stack<uint> Feed
        {
            get { return feed; }
        }

        public object Type { get; internal set; }

        public void addPost(uint id)
        {
            feed.Push(id);
        }
        
        public void removePost(uint id)
        {
            Stack<uint> tempStack = new Stack<uint>();
            while (feed.Count > 0)
            {
                uint currentPost = feed.Pop();
                if (currentPost != id)
                {
                    tempStack.Push(currentPost);
                }
            }
            while (tempStack.Count > 0)
            {
                feed.Push(tempStack.Pop());
            }
        }

        public void addCourse(CourseDto course)
        {
            courses.Add(course);
        }

        public void addStudent(uint id)
        {
            students.Add(id);
        }

        public void addProfessor(uint id)
        {
            professors.Add(id);
        }
        #endregion
    }
}
