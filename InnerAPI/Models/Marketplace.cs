namespace InnerAPI.Models
{
    public class Marketplace
    {

        #region "Declaração de variáveis"

        private uint _idMarketplace;
        private string _nomeMarketplace;
        private string _descricaoMarketplace;
        private uint _idUsuario;
        private uint _idNotificacao;
        private uint _idPostagem;

        #endregion

        #region "Propriedades"

        public uint IdMarketplace
        {
            get { return _idMarketplace; }
            set { _idMarketplace = value; }
        }

        public string NomeMarketplace
        { 
            get { return _nomeMarketplace; } 
            set { _nomeMarketplace = value; } 
        }

        public string DescricaoMarketplace
        {
            get { return _descricaoMarketplace; }
            set { _descricaoMarketplace = value; }
        }

        public uint IdUsuario
        {
            get { return _idUsuario; }
            set { _idUsuario = value;}
        }

        public uint IdNotificacao
        {
            get { return _idNotificacao;}
            set { _idNotificacao = value;}
        }

        public uint IdPostagem
        {
            get { return _idPostagem; }
            set { _idPostagem = value;}
        }
        #endregion

        #region "Metodos"

        //Futuramente arrumar nomeclatura dos métoodos
        public void ReceberPostagem()
        {

        }

        public void SerDeletado()
        {

        }

        public void SerCompartilhado()
        {

        }

        public void ReceberComentarios()
        {

        }
        #endregion

    }
}
