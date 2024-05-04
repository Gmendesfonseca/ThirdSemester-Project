namespace InnerAPI.Models
{
    public class Ranking
    {
        #region "Declaração de variáveis"

        private uint _idRanking;
        private string _nome;

        #endregion

        #region "Propriedades"
        
        public uint IdRanking
        { 
            get { return _idRanking; } 
            set { _idRanking = value; }
        }

        public string Nome
        { 
            get { return _nome; } 
            set {  _nome = value; } 
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
