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

        public Professor(uint id, string name, string email, string password, string registration, string cpf, DateOnly birthDate, string institution, string areaLecionada, string formacao) : base()
        {
            this.Id = id;
            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Registration = registration;
            this.CPF = cpf;
            this.BirthDate = birthDate;
            this.Institution = institution;
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
