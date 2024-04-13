namespace InnerAPI.Models
{
    public class Notificacao
    {
        #region "Declaração de variáveis"
        
        private uint _idNotificacao;
        private string _tituloNotificacao;

        #endregion

        #region "Propriedades"

        public uint IdNotificacao
        {
            get { return _idNotificacao; }
            set { _idNotificacao = value;}
        }

        public string TituloNotificacao
        {
            get { return _tituloNotificacao; }
            set { _tituloNotificacao = value; }
        }

        #endregion

        #region "Metodos"

        public void Alertar()
        {

        }

        #endregion
    }
}
