namespace InnerAPI.Models
{
    public class Grupo
    {
        #region "Declaração de variáveis"

        private uint _idGrupo;
        private string _nomeGrupo;
        private DateOnly _dataCriacaoGrupo;
        private uint _numeroMembros; //Talvez alterar para tipo ushort
        private uint _numeroAdministradores; //Talvez alterar para o tipo ushort
        private uint _numeroPostagens; //Talvez alterar para tipo ushort
        private uint _numeroNotificacoes; //Talvez alterar para tipo ushort

        #endregion

        #region "Propriedaedes"

        public uint IdGrupo
        {
            get { return _idGrupo; }
            set { _idGrupo = value;  }
        }

        public string NomeGrupo
        { 
            get { return _nomeGrupo; } 
            set { _nomeGrupo = value; } 
        }

        public DateOnly DataCriacaoGrupo
        {
            get { return _dataCriacaoGrupo; }
            set { _dataCriacaoGrupo = value;}
        }

        public uint NumeroMembros
        {
            get { return _numeroMembros; }
            set { _numeroMembros = value; }
        }

        public uint NumeroAdministradores
        {
            get { return _numeroAdministradores;}
            set { _numeroAdministradores = value;}
        }

        public uint NumeroPostagens
        {
            get { return _numeroPostagens;}
            set { _numeroPostagens = value;}
        }

        public uint NumeroNotificacoes
        {
            get { return _numeroNotificacoes; }
            set { _numeroNotificacoes = value; }
        }

        #endregion

        #region "Métodos"

        public void AdicionarPostagem()
        {

        }

        public void EditarPostagem()
        { 

        } //Revisar Método

        public void RemoverPostagem()
        {

        }

        #endregion
    }
}
