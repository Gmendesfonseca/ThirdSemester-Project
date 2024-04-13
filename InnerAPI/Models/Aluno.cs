namespace InnerAPI.Models
{
    public class Aluno : Usuario
    {
        #region "Declaração de variáveis"

        private uint _idAluno;
        private string _registroAluno; //Revisar futuramente
        private string _periodo;
        private string _turno;

        #endregion

        #region "Propriedades"
        public uint IdAluno
        { 
            get { return _idAluno; }
            set { _idAluno = value; }
        }

        public string RegistroAluno
        {
            get { return _registroAluno;}
            set { _registroAluno = value;}
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
