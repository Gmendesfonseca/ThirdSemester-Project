using InnerAPI.Dtos.Aluno;

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
            this.CPF = cpf;
            this.BirthDate = birthDate;
            this.Institution = instituicao;
            this._curso = curso;
            this._periodo = periodo;
            this.Pontuacao = pontuacao;
        }
        #endregion

        #region "Propriedades"
        public string Curso
        {
            get { return _curso; }
            set { _curso = value; }
        }

        public string Periodo
        {
            get { return _periodo; }
            set { _periodo = value; }
        }

        public uint Pontuacao
        {
            get { return _pontuacao; }
            set { _pontuacao = value; }
        }
        #endregion
    }
}
