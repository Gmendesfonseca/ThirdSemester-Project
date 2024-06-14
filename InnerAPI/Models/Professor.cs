using System.Reflection.Metadata;

namespace InnerAPI.Models
{
    public class Professor : Member
    {
        #region "Declaração de variáveis"
        private string _areaLecionada;
        private string _formação;
        #endregion

        #region "Construtores"
        public Professor() : base()
        {
            _areaLecionada = _formação = "";
        }

        public Professor(uint id, string name, string email, string password)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
        }

        public Professor(uint id, string name, string password, string email, string image, string about, string registration, string cpf, DateOnly birthDate, string institution, string areaLecionada, string formacao) : base(id, name, password, email, image, about, registration, cpf, birthDate, institution)
        {
            this._areaLecionada = areaLecionada;
            this._formação = formacao;
        }
        #endregion

        #region "Propriedades"
        public string AreaLecionada
        {
            get { return _areaLecionada; }
            set { _areaLecionada = value; }
        }

        public string Formacao
        {
            get { return _formação; }
            set { _formação = value; }
        }

        #endregion
    }
}
