namespace InnerAPI.Models
{
    public class Seguidor
    {
        #region "Declaração de variáveis"
        
        private uint _idSeguidor; //Criar Lista de seguidores
        private string _nomeSeguidor;

        #endregion

        #region "Propriedades"
        public uint IdSeguidor
        { 
            get { return _idSeguidor; }
            set { _idSeguidor = value;}
        }

        public string NomeSeguidor
        {
            get { return _nomeSeguidor; }
            set { _nomeSeguidor = value;}
        }

        #endregion

        #region "Metodos"

        //Confirmar se se refere ao convite
        public void Enviar()
        {

        }

        public void Receber()
        {

        }
        #endregion
    }
}
