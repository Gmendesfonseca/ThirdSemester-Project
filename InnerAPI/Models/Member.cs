namespace InnerAPI.Models
{
    public class Member  : User
    {
        #region "Declaração de variáveis"
        private string _matrícula;
        private string _cpf;
        public DateOnly _birthDate;
        private string _instituicao;
        #endregion

        #region "Construtores"
        public Member() : base()
        {
        }
        #endregion

        #region "Propriedades"
        public string Matricula
        {
            get { return _matrícula; }
            set { _matrícula = value; }
        }

        public string Cpf
        {
            get { return _cpf; }
            set { _cpf = value; }
        }

        public DateOnly BirthDate
        {
            get { return _birthDate; }
            set { _birthDate = value; }
        }

        public string Instituicao
        {
            get { return _instituicao; }
            set { _instituicao = value; }
        }
        #endregion

        #region "Métodos"
        #endregion
    }
}
