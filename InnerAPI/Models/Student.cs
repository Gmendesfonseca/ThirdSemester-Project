namespace InnerAPI.Models
{
    public class Student : User
    {
        #region "Declaração de variáveis"

        private uint _idStudent;
        private string cpf;
        public DateOnly BirthDate;
        private string _instituicao;
        private uint _pontuacao;
        private string _periodo;
        private string _turno;
        private int idUser;

        #endregion

        #region "Propriedades"
        public Student(uint id, string name, string cpf, int idUser) 
        {
            this._idStudent = id;
            this.Name = name;
            this.cpf = cpf;
            this.idUser = idUser;
        }
        public uint IdAluno
        { 
            get { return _idStudent; }
            set { _idStudent = value; }
        }

        public string Periodo
        {
            get { return _periodo; }
            set { _periodo = value; }
        }

        public string Turno
        {
            get { return _turno; }
            set { _turno = value; }
        }

        public string CPF
        {
            get { return cpf; }
            set { cpf = value; }
        }
        public DateOnly DataNascimento
        {
            get { return BirthDate; }
            set { BirthDate = value; }
        }
        public string Instituicao
        {
            get { return _instituicao; }
            set { _instituicao = value; }
        }
        public uint Pontuacao
        {
            get { return _pontuacao; }
            set { _pontuacao = value; }
        }

        #endregion

        #region "Métodos"

        public void Seguir()
        {

        }

        public void AceitarConvite() 
        {
            
        }//Revisar

        #endregion
    }
}
