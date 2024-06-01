namespace InnerAPI.Models
{
    public abstract class User
    {
        #region "Declaração de variáveis"
        private uint _id;
        private string _name;
        private string _password;
        private string _email;
        private bool _isOnline;
        private bool _isActive;
        private Stack<Notification> _notifications;
        private Stack<Post> _personalPosts;
        private List<Group> _groups;
        #endregion

        #region "Construtores"
        public User()
        {
            _id = 0;
            _name = _password = _email = "";
            _isOnline = _isActive = false;
            _groups = new List<Group>();
            _personalPosts = new Stack<Post>();
            _notifications = new Stack<Notification>();
        }
        #endregion

        #region "Propriedades"
        public uint Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        public string Email
        {
            get { return _email; }
            set { _email = value; }
        }

        public bool Online
        {
            get { return _isOnline; }
            set { _isOnline = value; }
        }

        public bool Active
        {
            get { return _isActive; }
            set { _isActive = value; }
        }
        #endregion

        #region "Métodos Listas"
        public Stack<Notification> Notifications()
        {
            return _notifications;
        }
        public void addNotification(Notification notification)
        {
            _notifications.Push(notification);
        }

        public Stack<Post> Posts()
        {
            return _personalPosts;
        }
        public void addPost(Post post)
        {
            _personalPosts.Push(post);
        }
        public void removePost(Post post)
        {
            Stack<Post> tempStack = new Stack<Post>();
            while (_personalPosts.Count > 0)
            {
                Post currentPost = _personalPosts.Pop();
                if (currentPost != post)
                {
                    tempStack.Push(currentPost);
                }
            }
            while (tempStack.Count > 0)
            {
                _personalPosts.Push(tempStack.Pop());
            }
        }

        public List<Group> Groups()
        {
            return _groups;
        }
        public void addGroup(Group grupo)
        {
            _groups.Add(grupo);
        }
        public void removeGroup(Group group)
        {
            _groups.Remove(group);
        }
        #endregion
    }
}