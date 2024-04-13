namespace InnerAPI.Models
{
    public class Story
    {
        #region "Declaração de variáveis"

        private uint _idStory;
        private uint _idUsuario;
        private DateOnly _dataPostagem;

        #endregion

        #region "Propriedades"

        public uint IdStory 
        { 
            get { return _idStory;} 
            set { _idStory = value; }
        }

        public uint IdUsuario
        { 
            get { return _idUsuario;}
            set { _idUsuario = value;}
        }

        public DateOnly DataPostagem
        {
            get { return _dataPostagem;}
            set { _dataPostagem = value;}
        }

        #endregion

        #region "Metodos"

        public void PublicarStrory()
        {

        }

        public void CurtirStory()
        {

        }

        public void DeletarStory()
        {

        }

        #endregion
    }
}
