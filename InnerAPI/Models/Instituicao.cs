namespace InnerAPI.Models
{
    public class Instituicao
    {
        #region "Declaração de variáveis"
        private uint _idInstituicao;
        private string _nomeInstituicao;
        private string _localidadeInstituicao;
        private string _curso; //Criar lista de cursos
        private string _alunos; //Trocar para Objeto [Aluno] + lista
        private string _grupos; //Checar futuramente {Trocar para objeto [Grupo]}
        #endregion

        #region "Propriedades"
        public uint IdInstituicao
        {
            get { return _idInstituicao; }
            set { _idInstituicao = value; }
        }

        public string NomeInstituicao
        {
            get { return _nomeInstituicao; }
            set { _nomeInstituicao = value; }
        }

        public string Localidade
        {
            get { return _localidadeInstituicao; }
            set { _localidadeInstituicao = value; }
        }

        public string Curso
        {
            get { return _curso; }
            set { _curso = value; }
        }

        public string Alunos
        {
            get { return _alunos; }
            set { _alunos = value; }
        }

        public string Grupos
        {
            get { return _grupos; } 
            set { _grupos = value; }
        }
        #endregion

        #region "Métodos"
        public void AtribuirHierarquia()
        {

        }

        public void CederAcesso()
        {

        }

        public void SuspenderAcesso()
        {

        } // Revisar Função

        public void CadastrarAluno()
        {

        }

        public void CriarGrupo()
        {

        }
        #endregion
    }
}
