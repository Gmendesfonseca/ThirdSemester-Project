namespace InnerAPI.Models
{
    public class Usuario : ICRUD
    {
        #region "Declaração de variáveis"
        private uint _idUsuario; //Talvez tenha que retirar
        private string _nomeUsuario;
        private string _senha;
        private string _cpf;
        private string _email;
        private DateOnly _dataNascimento;
        private string _estadoCivil; //Revisar - Variavel desnecessaria
        private bool _online;
        private uint _cep;
        private string _instituicao; // Futuramente alterar para tipo Objeto [Instituicao]
        private DateOnly _dataCriacao;
        private uint _pontuacao;
        private long _postagens; // Checar Tipo - Refere-se a qtde de posts?
        private string _nivelHierarquico; //Futuramente mudar para tipo Enum
                                          //private string _registro; // Verificar Futuramente
        #endregion

        #region "Propriedades"
        public uint Id
        {
            get { return _idUsuario; }
            set { _idUsuario = value; }
        }

        public string Nome
        {
            get { return _nomeUsuario; }
            set { _nomeUsuario = value; }
        }

        public string Senha
        {
            get { return _senha; }
            set { _senha = value; }
        }


        public string Cpf
        {
            get { return _cpf; }
            set { _cpf = value; }
        }

        public string Email
        {
            get { return _email; }
            set { _email = value; }
        }

        public DateOnly DataNascimento
        {
            get { return _dataNascimento; }
            set { _dataNascimento = value; }
        }

        public string EstadoCivil
        {
            get { return _estadoCivil; }
        }

        public bool Online
        {
            get { return _online; }
            set { _online = value; }
        }

        public uint Cep
        {
            get { return _cep; }
            set { _cep = value; }
        }

        public string Instituicao
        {
            get { return _instituicao; }
            set { _instituicao = value; }
        }

        public DateOnly DataCriacao
        {
            get { return _dataCriacao; }
            set { _dataCriacao = value; }
        }

        public uint Pontuacao
        {
            get { return _pontuacao; }
            set { _pontuacao = value; }
        }

        public long Postagens
        {
            get { return _postagens; }
            set { _postagens = value; }
        }

        public string NivelHierarquico
        {
            get { return _nivelHierarquico; }
            set { _nivelHierarquico = value; }
        }
        #endregion

        #region "Métodos"
        public void VerificarLogin()
        {
            
        } // Trocar para bool

        public void RealizarLogin()
        {

        }

        public void CurtirPostagem()
        {

        }

        public void CriarPostagem()
        {

        }

        public void Seguir()
        {

        }

        public void DeletarPostagem()
        {

        }

        public void ComentarPostagem()
        {

        }

        public void SalvarPostagem()
        {

        }

        public void CompartilharPostagem()
        {

        }

        #endregion

        #region "Implementação métodos da Interface"
        
        #endregion
    }
}
