using System;
namespace InnerAPI.Models
{
    public class Chat
    {
        public int Id { get; set; }
        public int UserId1 { get; set; }
        public int UserId2 { get; set; }
        public DateTime DateCreation { get; set; }
    }



    //    public class Chat
    //    {
    //        #region "Declaração de variáveis"

    //        private uint _idChat;
    //        private uint _idUser1;
    //        private uint _idUser2;
    //        private DateOnly _dateCreation;
    //        private List<string> _messages;

    //        #endregion

    //        #region "Construtores"

    //        public Chat()
    //        {
    //            _messages = new List<string>();
    //        }

    //        public Chat(uint idChat, uint idUser1, uint idUser2, DateOnly dateCreation)
    //        {
    //            _idChat = idChat;
    //            _idUser1 = idUser1;
    //            _idUser2 = idUser2;
    //            _dateCreation = dateCreation;
    //            _messages = new List<string>();
    //        }

    //        #endregion

    //        #region "Propriedades"

    //        public uint IdChat
    //        {
    //            get { return _idChat; }
    //            set { _idChat = value; }
    //        }

    //        public uint IdUser1
    //        {
    //            get { return _idUser1; }
    //            set { _idUser1 = value;}
    //        }

    //        public uint IdUser2
    //        {
    //            get { return _idUser2; }
    //            set { _idUser2 = value;}
    //        }

    //        public DateOnly DateCreation
    //        {
    //            get { return _dateCreation; }
    //            set { _dateCreation = value;}
    //        }

    //         public List<string> Messages
    //        {
    //            get { return _messages; }
    //            private set { _messages = value; }
    //        }

    //        #endregion

    //        #region "Metodos"


    //       public void SendMessage(string message)
    //        {
    //            _messages.Add(message);
    //        }

    //        public List<string> ReceiveMessages()
    //        {
    //            return _messages;
    //        }

    //        #endregion
    //    }
}
