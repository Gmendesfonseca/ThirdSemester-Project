namespace InnerAPI.Models
{
    public class Post
    {
        #region "Declaração de variáveis"

        private uint _idPostagem;
        private string _tituloPostagem;
        private uint _numeroCurtidas; //Talvez mudar tipo para ushort
        private string _comentario; //Criar uma lista
        private string _conteudoPostagem; //Será informado o endereço do arquivo a ser postado - Criar Lista
        private DateOnly _dataPostagem;
        private uint _institutionId;

        #endregion

        #region "Construtores"
        public Post(uint idPostagem, string tituloPostagem, string conteudoPostagem, uint institutionId)
        {
            _idPostagem = idPostagem;
            _tituloPostagem = tituloPostagem;
            _conteudoPostagem = conteudoPostagem;
            _institutionId = institutionId;
        }
        #endregion

        #region "Propriedades"

        public uint Id
        {
            get { return _idPostagem; }
            set { _idPostagem = value;}
        }

        public string Title
        { 
            get { return _tituloPostagem; } 
            set { _tituloPostagem = value; }
        }

        public uint Likes
        {
            get { return _numeroCurtidas;}
            set { _numeroCurtidas = value;}
        }

        public string Coments
        {
            get { return _comentario; }
            set { _comentario = value; }
        }

        public string Content
        {
            get { return _conteudoPostagem; }
            set { _conteudoPostagem = value;}
        }

        public DateOnly Date
        {
            get { return _dataPostagem;}
            set { _dataPostagem = value;}
        }

        public uint InstitutionId 
        {
            get { return _institutionId; }
            set { _institutionId = value; }
        }
        #endregion

        #region "Metodos"

        public void ReceberCurtida()
        {

        }

        public void ReceberComentario()
        {

        }

        //Revisar nome dos métodos abaixo

        public void SerCompartilhado()
        {

        }

        public void SerSalvo()
        {

        }

        #endregion
    }
}
