namespace InnerAPI.Models
{
    public class Ranking
    {
        #region "Declaração de variáveis"

        private uint _idRanking;
        private string _name;

        #endregion

        #region "Propriedades"
        
        public uint IdRanking
        { 
            get { return _idRanking; } 
            set { _idRanking = value; }
        }

        public string Name
        { 
            get { return _name; } 
            set {  _name = value; } 
        }

        #endregion

        #region "Metodos"

        public void ExibirRanking()
        {

        }

        public void AtualizarRanking()
        {

        }

        #endregion
    }
}
