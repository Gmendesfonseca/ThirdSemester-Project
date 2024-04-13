namespace InnerAPI.Models
{
    public class Filtro
    {
        #region "Declaração de variáveis"
        
        private uint _idFiltro;
        private string _nomeFiltro;

        #endregion

        #region "Propriedades"

        public uint IdFiltro
        {
            get { return _idFiltro; }
            set { _idFiltro = value; }
        }

        public string NomeFiltro
        { 
            get { return _nomeFiltro; } 
            set { _nomeFiltro = value; }
        }

        #endregion

        #region "Metodos"

        public void Filtrar()
        {

        }


        //Revisar o que os métodos abaixo fazem

        public void Permitir()
        { 

        }

        public void Negar() 
        {

        }
        #endregion
    }
}
