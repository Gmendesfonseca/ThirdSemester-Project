﻿namespace InnerAPI.Models
{
    public class Post
    {
        #region "Declaração de variáveis"
        private uint _id;
        private string _titlePost;
        private uint _numLikes; //Talvez mudar tipo para ushort
        private List<CommentDto> _comment; //Criar uma lista
        private string _contentPost; //Será informado o endereço do arquivo a ser postado - Criar Lista
        private DateOnly _datePost;
        #endregion

        #region "Propriedades"
        public uint Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public string TitlePost
        {
            get { return _titlePost; }
            set { _titlePost = value; }
        }

        public uint NumLikes
        {
            get { return _numLikes; }
            set { _numLikes = value; }
        }

        public string Comment
        {
            get { return _comment; }
            set { _comment = value; }
        }

        public string ContentPost
        {
            get { return _contentPost; }
            set { _contentPost = value; }
        }

        public DateOnly DatePost
        {
            get { return _datePost; }
            set { _datePost = value; }
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
