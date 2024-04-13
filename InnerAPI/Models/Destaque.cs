namespace InnerAPI.Models
{
    public class Destaque
    {
        #region "Declaração de variáveis"
        
        private uint _idDestaque;
        private string _nomeDestaque; //Revisar variável

        #endregion

        #region "Propriedades"

        public uint IdDestaque
        {
            get { return _idDestaque; }
            set { _idDestaque = value; }
        }

        public string NomeDestaque
        {
            get { return _nomeDestaque; } 
            set { _nomeDestaque = value; } 
        }

        #endregion

        #region "Metodos"

        //Revisar métodos e aplicar polimorfismo
        public void AdicionarDestaque()
        {

        }

        public void RemoverDestaque()
        {

        }
        #endregion
    }
}
