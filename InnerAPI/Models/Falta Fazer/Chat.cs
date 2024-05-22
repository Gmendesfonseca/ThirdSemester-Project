namespace InnerAPI.Models
{
    public class Chat
    {
        #region "Declaração de variáveis"
        
        private uint _idChat;
        private uint _idUser1;
        private uint _idUser2;
        private DateOnly _dateCreation;

        #endregion

        #region "Propriedades"
        
        public uint IdChat
        {
            get { return _idChat; }
            set { _idChat = value; }
        }

        public uint IdUser1
        {
            get { return _idUser1; }
            set { _idUser1 = value;}
        }

        public uint IdUser2
        {
            get { return _idUser2; }
            set { _idUser2 = value;}
        }

        public DateOnly DateCreation
        {
            get { return _dateCreation; }
            set { _dateCreation = value;}
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
