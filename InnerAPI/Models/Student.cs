namespace InnerAPI.Models
{
    public class Student : Member
    {
        #region "Declaração de variáveis"
        private string _curso;
        private string _periodo;
        private uint _pontuacao;
        #endregion

        #region "Construtores"
        public Student() : base()
        {
        }

        public Student(uint id, string name, string email, string password, string matricula, string cpf, DateOnly birthDate, string instituicao, string curso, string periodo, uint pontuacao) 
        {
            this.Id = id;
            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Matricula = matricula;
            this.Cpf = cpf;
            this.DataNascimento = birthDate;
            this.Instituicao = instituicao;
            this._curso = curso;
            this._periodo = periodo;
            this.Pontuacao = pontuacao;
        }
        #endregion

        #region "Propriedades"
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
