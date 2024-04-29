namespace InnerAPI.Models
{
    public class Institution
    {
        #region "Declaração de variáveis"
        private uint _idInstituicao;
        private string _nameInstitution;
        private string _localidadeInstituicao;
        private string _curso; //Criar lista de cursos
        private string _alunos; //Trocar para Objeto [Aluno] + lista
        private string _grupos; //Checar futuramente {Trocar para objeto [Grupo]}
        public string _email;
        public string _password;
        public string _domain;
        public string _cnpj;
        private int idUser;
        #endregion

        #region "Propriedades"

        public Institution(uint idInstituicao, string nomeInstituicao, string email, string password, string cnpj, string domain, int idUser)
        {
            this._idInstituicao = idInstituicao;
            this._nameInstitution = nomeInstituicao;
            this._email = email;
            this._password = password;
            this._cnpj = cnpj;
            this._domain = domain;
            this.idUser = idUser;
        }

        public Institution(int Id,
         string Name,
         string Email,
         string Password,
         string Domain,
         string Cnpj
    )
        {
            this.idUser= Id;
            this._nameInstitution = Name;
            this._email = Email;
            this._password = Password;
            this._domain = Domain;
            this._cnpj = Cnpj;
        }
        public uint IdInstituicao
        {
            get { return _idInstituicao; }
            set { _idInstituicao = value; }
        }

        public string NomeInstituicao
        {
            get { return _nameInstitution; }
            set { _nameInstitution = value; }
        }

        public string Localidade
        {
            get { return _localidadeInstituicao; }
            set { _localidadeInstituicao = value; }
        }

        public string Curso
        {
            get { return _curso; }
            set { _curso = value; }
        }

        public string Alunos
        {
            get { return _alunos; }
            set { _alunos = value; }
        }

        public string Grupos
        {
            get { return _grupos; } 
            set { _grupos = value; }
        }
        #endregion

        #region "Métodos"
        public void AtribuirHierarquia()
        {

        }

        public void CederAcesso()
        {

        }

        public void SuspenderAcesso()
        {

        } // Revisar Função

        public void CadastrarAluno()
        {

        }

        public void CriarGrupo()
        {

        }
        #endregion
    }
}
