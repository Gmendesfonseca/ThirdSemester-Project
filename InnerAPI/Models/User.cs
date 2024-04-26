using InnerAPI.Dtos.Post;
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
        private List<Notificacao> notifications;
        public bool Status;
#endregion

        #region "Propriedades"
        public User(int id, string name, string email, string password)
        {
            this.id = id;
            this.name = name;
            this.email = email;
            this.password = password;

            skills = new();
            notifications = new();
        }

        public int Id { get { return id; } }

        public string Email { get { return email; } }

        public string Password { set { } }

        public uint Id
        {
            get { return _idUsuario; }
            set { _idUsuario = value; }
        }

        public string Nome
        {
            get { return _nomeUsuario; }
            set { _nomeUsuario = value; }
        }

        public string Senha
        {
            get { return _senha; }
            set { _senha = value; }
        }


        public string Cpf
        {
            get { return _cpf; }
            set { _cpf = value; }
        }

        public string Email
        {
            get { return _email; }
            set { _email = value; }
        }

        public DateOnly DataNascimento
        {
            get { return _dataNascimento; }
            set { _dataNascimento = value; }
        }

        public string EstadoCivil
        {
            get { return _estadoCivil; }
        }

        public bool Online
        {
            get { return _online; }
            set { _online = value; }
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

        public long Postagens
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
        public List<Notificacao> Notifications { get { return notifications; } }
        
        public void addNotification(Notificacao notification) { }

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
            json["skills"] = skills.ToString();
            json["jobs"] = Jobs;

            JArray notificationList = new();
            foreach (Notificacao notification in notifications)
                notificationList.Add(notification.serialize());

            json["notifications"] = notificationList;

            json["status"] = Status;

            return json;
        }
        #endregion
    }
}