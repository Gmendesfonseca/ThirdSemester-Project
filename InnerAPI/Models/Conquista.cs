namespace InnerAPI.Models
{
    public class Conquista
    {
        #region "Declaração de variáveis"
        
        private uint _idConquista;
        private string _nomeConquista;
        private DateTime _dataHoraConquista; //Revisar Nome da variável
        private uint _idUsuario;

        #endregion

        #region "Propriedades"

        public uint IdConquista
        {
            get { return _idConquista; }
            set { _idConquista = value; }
        }

        public string NomeConquista
        { 
            get { return _nomeConquista; } 
            set { _nomeConquista = value; } 
        }

        public DateTime DataHoraConquista
        { 
            get { return _dataHoraConquista; } 
            set { _dataHoraConquista = value; } 
        }

        public uint IdUsuario
        {
            get { return _idUsuario; }
            set { _idUsuario = value;}
        }

        #endregion

        #region "Metodos"

        public void ReceberConquista()
        {

        }

        public void ExbirConquista()
        {

        }

        public void ExcluirConquista()
        {

        }
        #endregion
    }
}
