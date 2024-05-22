namespace InnerAPI.Models
{
    public class Seguidor
    {
        #region "Declaração de variáveis"
        
        private uint _idFollower; //Criar Lista de seguidores
        private string _nameFollower;

        #endregion

        #region "Propriedades"
        public uint IdFollower
        { 
            get { return _idFollower; }
            set { _idFollower = value;}
        }

        public string NameFollower
        {
            get { return _nameFollower; }
            set { _nameFollower = value;}
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
