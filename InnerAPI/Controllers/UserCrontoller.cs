using InnerAPI.Utils;
using InnerAPI.Models;
using InnerAPI.Dtos.User;
using Microsoft.AspNetCore.Mvc;
using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Aluno;

namespace InnerAPI.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly SharedService _sharedService;
        private int currentUser = -1;
        List<UserDto> users = new();
        List<Institution> institutions = new();
        List<Student> students;
        public void login(int userId)
        {
            currentUser = userId;
        }

        public void logout()
        {
            currentUser = -1;
        }

        public UserController(SharedService sharedService)
        {
            _sharedService = sharedService;
            users = _sharedService.GetUsers();
            institutions = _sharedService.GetInstitution();
            students = _sharedService.GetStudent();
        }

        public HttpGetAttribute GetUsers()
        {
            return new HttpGetAttribute();
        }

        public List<UserDto> getUsers()
        {
            return users;
        }

        public UserDto register(RegisterUserDto register)
        {
            int id = users.Count + 1;
            string name = register.Nome ;
            string email = register.Email;
            string password = register.Senha;


            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            var existingUser = institutions.Exists(r => r.NomeInstituicao == register.Nome || r._email == register.Email);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            UserDto newUser = new UserDto(id, name, email, password);
            

            users.Add(newUser);
            currentUser = id;

            return newUser;
        }

        /*public Student register(RegisterStudentDto register)
        {
            int id = users.Count + 1;
            string name = register.Name;
            string email = register.Password;
            string password = register.Domain;
            string cnpj = register.Cnpj;

            instituicao.getUsers().Exists(r => r.Name == registerDto.Name || r.Email == registerDto.Email || r.Cnpj == registerDto.Cnpj || r.Domain == registerDto.Domain);
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            var existingUser = users.FirstOrDefault(u => u.Email == email);
            if (existingUser != null)
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");

            User newUser = new User(id, name, email, password);
            Institution newInstitution = new Institution(id, name, email, password, cnpj);

            users.Add(newUser);
            currentUser = id;

            return newUser;
        }*/
        public Institution register(RegisterInstitutionDto register)
        {
            uint id = (uint)institutions.Count + 1;
            string name = register.Name;
            string email = register.Email;
            string password = register.Password;
            string domain = register.Domain;
            string cnpj = register.Cnpj;
            int idUser = users.Count + 1;

            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            var existingUser = institutions.Exists(r => r.NomeInstituicao == register.Name || r._email == register.Email || r._cnpj == register.Cnpj || r._domain == register.Domain);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            UserDto newUser = new UserDto(idUser, name, email, password);
            Institution newInstitution = new Institution(id, name, email, password, cnpj, domain, idUser);

            users.Add(newUser);
            institutions.Add(newInstitution);
            currentUser = idUser;

            return newInstitution;
        }
        public UserDto login(LoginDto login)
        {
            string email = login.Email;
            string password = login.Password;

            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            UserDto user = users.Find(u => u.Email == email);

            if (user == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (user.Password != password)
                throw new ArgumentException("Senha incorreta.");

            currentUser = user.Id;

            return user;
        }

        public void delete(int id)
        { users.RemoveAll(usuario => usuario.Id == id); }
        

/*
        public User list(Request request, UserData data)
        {
            Console.WriteLine(data.getUsers());

            JArray usersList = new();
            foreach (User user in data.getUsers())
                usersList.Add(user.serialize());

            if (usersList.Count == 0)
                return ResponseUtils.SuccessResponse(JObject.Parse("[]"));


            return ResponseUtils.SuccessResponse(usersList);
        }

        public User getUserById(Request request, UserData data)
        {
            User user = data.getUserById((int)request.routeParans.GetValue("id"));

            if (user == null)
                return ResponseUtils.NotFound("Usuario não existe.");

            return ResponseUtils.SuccessResponse(user.serialize());
        }

        public User getUserFriendship(Request request, UserData data)
        {
            User user = data.getUserById((int)request.routeParans.GetValue("id"));

            if (user == null)
                return ResponseUtils.NotFound("Usuario não existe.");

            return new Response("teste");
        }

        public User getUserByLogin(string email)
        {
            return users.Find(user => user.checkEmail(email));
        }

        public User getUserById(int id)
        {
            return users.Find(user => user.Id == id);
        }

        public List<User> getUsers()
        {
            return users;
        }

        public static Response getUserNotification(Request request, UserData data)
        {
            User user = data.getUserById((int)request.routeParans.GetValue("id"));

            if (user == null)
               return ResponseUtils.NotFound("Usuario não existe.");

           List<string> notificationsList = new();
           foreach (Notification notification in user.Notifications)
                notificationsList.Add(notification.serialize().ToString());

            return ResponseUtils.SuccessResponse(JObject.Parse(notificationsList.ToString()));
        }
*/
    }
}
