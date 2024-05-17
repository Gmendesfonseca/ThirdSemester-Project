using InnerAPI.Controllers;
using InnerAPI.Dtos.Courses;

namespace InnerAPI.Models
{
    public class Institution : User
    {
        #region "Declaração de variáveis"
        private string _localidadeInstituicao; 
        private DateOnly _dataCriacao; 
        public string _domain; 
        public string _cnpj; 
        private List<CourseDto> courses; 
        private readonly List<Student> students; 
        private readonly List<Professor> professors; 
        Stack<Post> posts;
        #endregion

        #region "Construtores"
        public Institution() : base()
        {
            List<CourseDto> courses = new List<CourseDto>();
            List<Student> students = new List<Student>();
            List<Professor> professors = new List<Professor>();
            Stack<Post> posts = new Stack<Post>();
        }
        public Institution(uint id, string name, string email, string password, string cnpj, string domain) 
        {
            this.Id = id;
            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.CNPJ = cnpj;
            this.Domain = domain;
            List<CourseDto> courses = new List<CourseDto>();
            List<Student> students = new List<Student>();
            List<Professor> professors = new List<Professor>();
        }
        public Institution(string name, string email, string password, string localidadeInstituicao, DateOnly dataCriacao)
        {
            this.Name = name; // Herdado de User
            this.Email = email; // Herdado de User
            this.Password = password; // Herdado de User
            this._localidadeInstituicao = localidadeInstituicao;
            this._dataCriacao = dataCriacao;
            this.courses = new List<CourseDto>();
            this.students = new List<Student>();
            this.professors = new List<Professor>();
        }
        #endregion

        #region "Propriedades"
        public string Localidade
        {
            get { return _localidadeInstituicao; }
            set { _localidadeInstituicao = value; }
        }

        public DateOnly DataCriacao
        {
            get { return _dataCriacao; }
            set { _dataCriacao = value; }
        }

        public string Domain
        {
            get { return _domain; }
            set { _domain = value; }
        }

        public string CNPJ
        {
            get { return _cnpj; }
            set { _cnpj = value; }
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

        public Stack<Post> Posts { 
            get { 
                List<Post> listPosts = new List<Post>();
                for (int i = 0; i < posts.Count; i++)
                {
                    listPosts.Add(posts.Pop());
                }
                return posts; 
            }
        }

        public void addPost(Post post)
        {
            posts.Push(post);
        }

        public void removePost(Post post)
        {
            posts.Pop();
        }
        #endregion
    }
}
