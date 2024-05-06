using InnerAPI.Dtos.Post;
using InnerAPI.Dtos.Notification;
using InnerAPI.Dtos.Groups;
using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Login;
using InnerAPI.Utils;
using InnerAPI.Services;

namespace InnerAPI.Models
{
    public class User 
    {
        #region "Declaração de variáveis"
        private uint _id;
        private string _name;
        private string _password;
        private string _email;
        public bool _status;
        private Stack<NotificationDto> _notifications;
        private Stack<PostDto> _postagens; 
        private List<GroupsDto> _grupos;
        #endregion

        #region "Construtores"
        public User()
        {
            List<GroupsDto> _grupos = new List<GroupsDto>();
            Stack<PostDto> _postagens = new Stack<PostDto>();
            Stack<NotificationDto> _notifications = new Stack<NotificationDto>();
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
            get { return _status; }
            set { _status = value; }
        }
        #endregion

        #region "Métodos Listas"
        public Stack<NotificationDto> getNotifications()
        {
            return _notifications;
        }
        public void addNotification(NotificationDto notification)
        {
            _notifications.Push(notification);
        }

        public Stack<PostDto> getPostagens()
        {
            return _postagens;
        }
        public void addPostagem(PostDto postagem)
        {
            _postagens.Push(postagem);
        }

        public List<GroupsDto> getGrupos()
        {
            return _grupos;
        }
        public void addGrupo(GroupsDto grupo)
        {
            _grupos.Add(grupo);
        }
        #endregion
    }
}