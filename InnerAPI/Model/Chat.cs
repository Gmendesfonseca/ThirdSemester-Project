namespace InnerAPI.Models
{
    public class Chat
    {
        #region "Declaração de variáveis"
        
        private uint _idChat;
        private uint _idUsuario1;
        private uint _idUsuario2;
        private DateOnly _dataCriacao;

        #endregion

        #region "Propriedades"
        
        public uint IdChat
        {
            get { return _idChat; }
            set { _idChat = value; }
        }

        public uint IdUsuario1
        {
            get { return _idUsuario1; }
            set { _idUsuario1 = value;}
        }

        public uint IdUsuario2
        {
            get { return _idUsuario2; }
            set { _idUsuario2 = value;}
        }

        public DateOnly DataCriacao
        {
            get { return _dataCriacao; }
            set { _dataCriacao = value;}
        }

        #endregion

        #region "Metodos"

        //Futuramente alterar nome dos métodos
        public void Enviar()
        {

        }

        public void Receber() 
        {

        }

        #endregion
    }
}
