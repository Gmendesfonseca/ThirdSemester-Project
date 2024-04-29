using InnerAPI.Dtos.Post;
using InnerAPI.Dtos.Notification;
using Newtonsoft.Json.Linq;

namespace InnerAPI.Models
{
    public class User
    {
        #region "Declaração de variáveis"
        private int id;
        public string name;
        private string email;
        private string password;
        private uint _cep;
        private Stack<PostDto> _postagens; 
        private string _nivelHierarquico;
        private Stack<NotificationDto> notifications;
        public bool status;
        #endregion

        #region "Propriedades"

        public int Id
        {
            get { return id; }
            set { id = value; }
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public string Password
        {
            get { return password; }
            set { password = value; }
        }

        public string Email
        {
            get { return email; }
            set { email = value; }
        }

        public bool Online
        {
            get { return status; }
            set { status = value; }
        }

        public uint Cep
        {
            get { return _cep; }
            set { _cep = value; }
        }

        public Stack<PostDto> Postagens
        {
            get { return _postagens; }
            set { _postagens = value; }
        }

        public string NivelHierarquico
        {
            get { return _nivelHierarquico; }
            set { _nivelHierarquico = value; }
        }
        #endregion

        #region "Métodos"
        public bool checkNotification(int item) { return true; }
        public List<NotificationDto> Notifications { get { return Notifications; } }
        
        public void addNotification(Notification notification) { }

        public bool checkEmail(string email) { return email == this.email; }

        public bool checkPassword(string password) { return password == this.password; }

        public void CurtirPostagem()
        {

        }

        public void CriarPostagem()
        {

        }

        public void Seguir()
        {

        }

        public void DeletarPostagem()
        {

        }

        public void ComentarPostagem()
        {

        }

        public void SalvarPostagem()
        {

        }

        public void CompartilharPostagem()
        {

        }
        #endregion

        #region "Implementação métodos da Interface"
        #endregion
    }
}