using System.Collections.Generic;
namespace InnerAPI.Models
{
    public class Seguidor
    {
        #region "Declaração de variáveis"
        
        private uint _idFollower; //Criar Lista de seguidores
        private string? _nameFollower;
        private List<Seguidor> _followers;//lista de seguidores

        #endregion

        #region "Construtores"

        public Seguidor()
        {
            _followers = new List<Seguidor>();
        }

        public Seguidor(uint idFollower, string nameFollower)
        {
            _idFollower = idFollower;
            _nameFollower = nameFollower;
            _followers = new List<Seguidor>();
        }

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

          public List<Seguidor> Followers
        {
            get { return _followers; }
            private set { _followers = value; }
        }

        #endregion

        #region "Metodos"

    
        public void EnviarSolicitacao(Seguidor seguidor)
        {
          //lógica que faltam
        }

        public void ReceberSolicitacao(Seguidor seguidor)
        {
            
            _followers.Add(seguidor);
        }
        #endregion
    }
}
