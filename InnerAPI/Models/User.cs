using InnerAPI.Dtos.Post;
using InnerAPI.Dtos.Notification;
using InnerAPI.Dtos.Groups;
using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Login;
using InnerAPI.Dtos.User;
using InnerAPI.Utils;
using InnerAPI.Services;

namespace InnerAPI.Models
{
    public class User 
    {
        #region "Declaração de variáveis"
        private uint _id;
        private string _name;
        private string _password;
        private string _email;
        public bool _status;
        private Stack<NotificationDto> _notifications;
        private Stack<PostDto> _postagens; 
        private List<GroupsDto> _grupos;
        private readonly SharedService newSharedService;
        private List<Institution> institutions;
        private int currentUser = -1;
        #endregion

        #region "Construtores"
        public User()
        {
            List<GroupsDto> _grupos = new List<GroupsDto>();
            Stack<PostDto> _postagens = new Stack<PostDto>();
            Stack<NotificationDto> _notifications = new Stack<NotificationDto>();
            institutions = new List<Institution>();
        }

        public User(SharedService sharedService)
        {
            newSharedService = sharedService;
            List<GroupsDto> _grupos = new List<GroupsDto>();
            Stack<PostDto> _postagens = new Stack<PostDto>();
            Stack<NotificationDto> _notifications = new Stack<NotificationDto>();
            institutions = sharedService.GetInstitution();
        }
        #endregion

        #region "Propriedades"
        public uint Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        public string Email
        {
            get { return _email; }
            set { _email = value; }
        }

        public bool Online
        {
            get { return _status; }
            set { _status = value; }
        }
        #endregion

        #region "Métodos Listas"
        public Stack<NotificationDto> getNotifications()
        {
            return _notifications;
        }
        public void addNotification(NotificationDto notification)
        {
            _notifications.Push(notification);
        }

        public Stack<PostDto> getPostagens()
        {
            return _postagens;
        }
        public void addPostagem(PostDto postagem)
        {
            _postagens.Push(postagem);
        }

        public List<GroupsDto> getGrupos()
        {
            return _grupos;
        }
        public void addGrupo(GroupsDto grupo)
        {
            _grupos.Add(grupo);
        }
        #endregion

        #region "Controller"
        public void logout()
        {
            currentUser = -1;
        }

        public Student register(RegisterStudentDto register)
        {
            var domain = register.Email.Split('@')[1]; // Pega o domínio do email
            // Encontra a instituição correta pelo ID
            var institution = institutions.FirstOrDefault(i => i.Domain == domain);
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }

            // Verifica se o estudante já existe
            var existingStudent = institution.Students.Exists(r => r.Matricula == register.Matricula || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingStudent)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            // Cria e adiciona o novo estudante à instituição correta
            uint id = (uint)institution.Students.Count + 1;
            Student newStudent = new Student(id, register.Name, register.Email, register.Password, register.Matricula, register.Cpf, register.BirthDate, register.Instituicao, register.Curso, register.Periodo, register.pontuacao);
            institution.Students.Add(newStudent);

            // Atualiza o currentUser, se necessário
            currentUser = (int)id;

            return newStudent;
        }

        /*public Professor register(RegisterProfessorDto register)
        {
            uint id = (uint)professors.Count + 1;
            string name = register.Name;
            string cpf = register.Cpf;
            int type = 2;


            var existingUser = professors.Exists(r => r.Name == register.Name || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            Professor newProfessor = new Professor(id, name, email, password, cpf);

            professors.Add(newProfessor);
            currentUser = idUser;

            return newProfessor;
        }*/

        public Institution register(RegisterInstitutionDto register)
        {
            uint id = (uint)institutions.Count + 1;
            string name = register.Name;
            string email = register.Email;
            string password = register.Password;
            string domain = register.Domain;
            string cnpj = register.Cnpj;
            int type = 1;

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            var existingUser = institutions.Exists(r => r.Name == register.Name || r._email == register.Email || r._cnpj == register.Cnpj || r._domain == register.Domain);
            if (existingUser)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            Institution newInstitution = new Institution(id, name, email, password, cnpj, domain);

            institutions.Add(newInstitution);
            //currentUser = id;

            return newInstitution;
        }

        public Institution loginInstitution(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

             Institution institution = institutions.FirstOrDefault(i => i.Email == user.Email);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (institution == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (institution.Password != password)
                throw new ArgumentException("Senha incorreta.");

            currentUser = (int)institution.Id;

            return institution;
        }

        public Student loginStudent(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;
            
            Student student = institutions.SelectMany(i => i.Students).FirstOrDefault(s => s.Email == user.Email);
            
            Email Email = new Email();
            if (!Email.IsValid(email))
                    throw new ArgumentException("Email inválido.");
            
            if (student == null)
                    throw new ArgumentException("Usuário não encontrado.");
            
            if (student.Password != password)
                    throw new ArgumentException("Senha incorreta.");
            
            currentUser = (int)student.Id;
            
            return student;
        }

        public Professor loginProfessor(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            Professor professor = institutions.SelectMany(i => i.Professors).FirstOrDefault(p => p.Email == user.Email);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (professor == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (professor.Password != password)
                throw new ArgumentException("Senha incorreta.");

            currentUser = (int)professor.Id;

            return professor;
        }

        public void deleteIntitution(int id)
        { institutions.RemoveAll(usuario => usuario.Id == id); }

        public void deleteStudent(int id)
        { institutions.SelectMany(i => i.Students).ToList().RemoveAll(usuario => usuario.Id == id); }

        public void deleteProfessor(int id)
        { institutions.SelectMany(i => i.Professors).ToList().RemoveAll(usuario => usuario.Id == id); }

        public 

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
        #endregion

        #region "Métodos"
        public bool checkNotification(int item) { return true; }
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
        #endregion
    }
}