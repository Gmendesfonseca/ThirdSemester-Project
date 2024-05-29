namespace InnerAPI.Models
{
    public class Categoria
    {
        #region "Declaração de variáveis"
        
        private uint _idCategoria;
        private string _nomeCategoria;

        #endregion

        #region "Propriedades"

        public uint IdCategoria
        { 
            get { return _idCategoria; }
            set { _idCategoria = value; }
        }

        public string NomeCategoria
        { 
            get { return _nomeCategoria; } 
            set { _nomeCategoria = value; }
        }

        #endregion

        #region "Metodos"

        //Revisar Metodos - Repetição com as outras classes
        //Solução - Implementar o polimorfismo para evitar repetição
        public void CriarCategoria()
        {

        }

        public void DeletarCategoria()
        {

        }

        #endregion
    }
}
