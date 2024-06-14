namespace InnerAPI.Models
{
    public abstract class Member : User
    {
        #region "Declaração de variáveis"
        private string _registration;
        private uint _institutionId;
        private string _cpf;
        public DateOnly _birthDate;
        private string _institution;
        private List<Post> _postList;
        private List<Chat> _chatList;
        private List<Friend> _friendList;

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

        public uint InstitutionId
        {
            get { return _institutionId; }
            set { _institutionId = value; }
        }

        public List<Post> Posts
        {
            get { return _postList; }
        }

        public List<Chat> Chats
        {
            get { return _chatList; }
        }

        public List<Friend> Friends
        {
            get { return _friendList; }
        }
        #endregion
    }
}
