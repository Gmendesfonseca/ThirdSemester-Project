using InnerAPI.Dtos.Aluno;

namespace InnerAPI.Models
{
    public class Student : Member
    {
        #region "Declaração de variáveis"
        private string _course;
        private string _periodo;
        private uint _pontuacao;
        #endregion

        #region "Construtores"
        public Student() : base()
        {
            _course = _periodo = "";
            _pontuacao = 0;
        }

        public Student(uint id, string name, string email, string password, string matricula, string cpf, DateOnly birthDate, string instituicao, string curso, string periodo, uint pontuacao) : base()
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Registration = matricula;
            CPF = cpf;
            BirthDate = birthDate;
            Institution = instituicao;
            _course = curso;
            _periodo = periodo;
            _pontuacao = pontuacao;
        }
        #endregion

        #region "Propriedades"
        public string Curso
        {
            get { return _course; }
            set { _course = value; }
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
