namespace InnerAPI.Models
{
    public class Postagem
    {
        #region "Declaração de variáveis"

        private uint _idPostagem;
        private string _tituloPostagem;
        private uint _numeroCurtidas; //Talvez mudar tipo para ushort
        private string _comentario; //Criar uma lista
        private string _conteudoPostagem; //Será informado o endereço do arquivo a ser postado - Criar Lista
        private DateOnly _dataPostagem;

        #endregion

        #region "Propriedades"

        public uint IdPostagem
        {
            get { return _idPostagem; }
            set { _idPostagem = value;}
        }

        public string TituloPostagem
        { 
            get { return _tituloPostagem; } 
            set { _tituloPostagem = value; }
        }

        public uint NumeroCurtidas
        {
            get { return _numeroCurtidas;}
            set { _numeroCurtidas = value;}
        }

        public string Comentario
        {
            get { return _comentario; }
            set { _comentario = value; }
        }

        public string ConteudoPostagem
        {
            get { return _conteudoPostagem; }
            set { _conteudoPostagem = value;}
        }

        public DateOnly DataPostagem
        {
            get { return _dataPostagem;}
            set { _dataPostagem = value;}
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
