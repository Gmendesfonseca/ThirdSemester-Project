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
        }

        public Professor(uint id, string name, string email, string password, string matricula, string cpf, DateOnly birthDate, string instituicao, string areaLecionada, string formacao)
        {
            this.Id = id;
            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Matricula = matricula;
            this.Cpf = cpf;
            this.BirthDate = birthDate;
            this.Instituicao = instituicao;
            this._areaLecionada = areaLecionada;
            this._formação = formacao;
        }
        #endregion

        #region "Propriedades"
        public string AreaLecionada
        {
            get { return _areaLecionada;}
            set { _areaLecionada = value;}
        }

        public string Formacao
        {
            get { return _formação;}
            set { _formação = value;}
        }

        #endregion

        #region "Métodos"

        public void Editar()
        {

        }

        public void Remover()
        {

        }

        #endregion
    }
}
