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

        public Student(uint id, string name, string email, string password)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
        }

        public Student(uint id, string name, string password, string email, string image, string about, string registration, string cpf, DateOnly birthDate, string institution, string course, string periodo, uint pontuacao) : base(id, name, password, email, image, about, registration, cpf, birthDate, institution)
        {

            _course = course;
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
