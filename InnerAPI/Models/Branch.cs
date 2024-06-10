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
        private Stack<Post> feed;
        #endregion

        #region "Construtores"
        public Branch() : base()
        {
            courses = new List<CourseDto>();
            students = new List<Student>();
            professors = new List<Professor>();
            feed = new Stack<Post>();
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
            courses = new List<CourseDto>();
            students = new List<Student>();
            professors = new List<Professor>();
            feed = new Stack<Post>();
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
            feed = new Stack<Post>();
        }
        #endregion

        #region "Métodos Listas"
        public List<CourseDto> Courses
        {
            get { return courses; }
        }

        public List<Student> Students
        {
            get { return students; }
        }

        public List<Professor> Professors
        {
            get { return professors; }
        }

        public Stack<Post> Feed
        {
            get
            {
                List<Post> listPosts = new List<Post>();
                for (int i = 0; i < feed.Count; i++)
                {
                    listPosts.Add(feed.Pop());
                }
                return feed;
            }
        }
        public void addPost(Post post)
        {
            feed.Push(post);
        }
        public Post updatePost(int id, Post postUpdate)
        {
            Stack<Post> tempStack = new Stack<Post>();
            Post updatedPost = null;

            while (feed.Count > 0)
            {
                Post currentPost = feed.Pop();
                if (currentPost.IdPost != id)
                {
                    tempStack.Push(currentPost);
                }
                else
                {
                    // Update the post here
                    // currentPost.SomeProperty = newValue;
                    updatedPost = currentPost;
                }
            }

            while (tempStack.Count > 0)
            {
                feed.Push(tempStack.Pop());
            }

            return updatedPost;
        }
        public void removePost(Post postDelete)
        {
            Stack<Post> tempStack = new Stack<Post>();
            while (feed.Count > 0)
            {
                Post currentPost = feed.Pop();
                if (currentPost != postDelete)
                {
                    tempStack.Push(currentPost);
                }
            }
            while (tempStack.Count > 0)
            {
                feed.Push(tempStack.Pop());
            }
        }
        #endregion
    }
}
