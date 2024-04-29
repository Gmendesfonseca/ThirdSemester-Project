namespace InnerAPI.Models
{
    public class Docente
    {
        #region "Declaração de variáveis"

        private uint _idDocente;
        private string _registroDocente; //Revisar futuramente
        private string _areaLecionada;

        #endregion

        #region "Propriedades"

        public uint IdDocente
        {
            get { return _idDocente; }
            set { _idDocente = value; }
        }

        public string RegistroDocente
        { 
            get { return _registroDocente;} 
            set { _registroDocente = value; } 
        }

        public string AreaLecionada
        {
            get { return _areaLecionada;}
            set { _areaLecionada = value;}
        }

        #endregion

        #region "Métodos"

        public void Editar()
        {

        }

        public void Remover()
        {

        }

        #endregion
    }
}
