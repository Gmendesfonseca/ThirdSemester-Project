namespace InnerAPI.Models
{
    public abstract class Institution : User
    {
        #region "Declaração de variáveis"
        private string _address;
        private DateOnly _creationDate;
        public string _cnpj;
        #endregion

        #region "Construtores"
        public Institution() : base()
        {
            _address = "";
            _creationDate = new DateOnly();
            _cnpj = "";
        }
        #endregion

        #region "Propriedades"
        public string Address
        {
            get { return _address; }
            set { _address = value; }
        }

        public DateOnly CreationDate
        {
            get { return _creationDate; }
            set { _creationDate = value; }
        }

        public string CNPJ
        {
            get { return _cnpj; }
            set { _cnpj = value; }
        }
        #endregion
    }
}
