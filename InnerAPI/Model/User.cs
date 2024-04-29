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
        private string cpf;
        private string password;
        public DateOnly BirthDate;
        private uint _cep;
        private string _instituicao; // Futuramente alterar para tipo Objeto [Instituicao]
        private DateOnly _dataCriacao;
        private uint _pontuacao;
        private List<PostDto> _postagens; // Checar Tipo - Refere-se a qtde de posts?
        private string _nivelHierarquico;
        private List<NotificationDto> notifications;
        public bool Status;
#endregion

        #region "Propriedades"
        public User(int id, string name, string email, string password)
        {
            this.id = id;
            this.name = name;
            this.email = email;
            this.password = password;

            notifications = new();
        }

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


        public string Cpf
        {
            get { return cpf; }
            set { cpf = value; }
        }

        public string Email
        {
            get { return email; }
            set { email = value; }
        }

        public DateOnly DataNascimento
        {
            get { return BirthDate; }
            set { BirthDate = value; }
        }

        public bool Online
        {
            get { return Status; }
            set { Status = value; }
        }

        public uint Cep
        {
            get { return _cep; }
            set { _cep = value; }
        }

        public string Instituicao
        {
            get { return _instituicao; }
            set { _instituicao = value; }
        }

        public DateOnly DataCriacao
        {
            get { return _dataCriacao; }
            set { _dataCriacao = value; }
        }

        public uint Pontuacao
        {
            get { return _pontuacao; }
            set { _pontuacao = value; }
        }

        public List<PostDto> Postagens
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
        public JObject serialize()
        {
            JObject json = new JObject();

            json["id"] = id;
            json["nome"] = name;
            json["email"] = email;
            json["password"] = password;
            json["birthDate"] = BirthDate.ToString("dd/MM/yyyy");

            //JArray notificationList = new();
            //foreach (Notification notification in notifications)
            //    notificationList.Add(notification.serialize());

            //json["notifications"] = notificationList;

            json["status"] = Status;

            return json;
        }
        #endregion
    }
}