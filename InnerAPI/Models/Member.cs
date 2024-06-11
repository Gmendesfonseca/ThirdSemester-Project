namespace InnerAPI.Models
{
    public abstract class Member : User
    {
        #region "Declaração de variáveis"
        private string _registration;
        private string _cpf;
        public DateOnly _birthDate;
        private string _institution;
        #endregion

        #region "Construtores"
        public Member() : base()
        {
            _registration = _cpf = _institution = "";
            _birthDate = new DateOnly();
        }
        #endregion

        #region "Propriedades"
        public string Registration
        {
            get { return _registration; }
            set { _registration = value; }
        }

        public string CPF
        {
            get { return _cpf; }
            set { _cpf = value; }
        }

        public DateOnly BirthDate
        {
            get { return _birthDate; }
            set { _birthDate = value; }
        }

        public string Institution
        {
            get { return _institution; }
            set { _institution = value; }
        }
        #endregion
    }
}
