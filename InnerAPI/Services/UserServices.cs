namespace InnerAPI.Services
{
    public class UserServices
    {
        private string _email;
        private string _password;

        public bool checkNotification(int item)
        { return true; }

        public bool checkEmail(string email) { return email == this._email; }

        public bool checkPassword(string password) { return password == this._password; }

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
    }
}
