using Newtonsoft.Json.Linq;

namespace InnerAPI.Models
{
    public class User
    {
        private int id;
        public string name;
        private string email;
        private string password;
        public DateOnly BirthDate;
        private List<string> skills;
        public string Jobs;
        private List<Notificacao> notifications;
        public bool Status;

        public User(int id, string name, string email, string password)
        {
            this.id = id;
            this.name = name;
            this.email = email;
            this.password = password;

            skills = new();
            notifications = new();
        }

        public string Skills { get; set; }

        public bool checkNotification(int item) { return true; }
        public List<Notificacao> Notifications { get { return notifications; } }
        public void addNotification(Notificacao notification) { }

        public bool checkEmail(string email) { return email == this.email; }

        public bool checkPassword(string password) { return password == this.password; }

        public int Id { get { return id; } }

        public string Email { get { return email; } }

        public string Password { set { } }

        public JObject serialize()
        {
            JObject json = new JObject();

            json["id"] = id;
            json["nome"] = name;
            json["email"] = email;
            json["password"] = password;
            json["birthDate"] = BirthDate.ToString("dd/MM/yyyy");
            json["skills"] = skills.ToString();
            json["jobs"] = Jobs;

            JArray notificationList = new();
            foreach (Notificacao notification in notifications)
                notificationList.Add(notification.serialize());

            json["notifications"] = notificationList;

            json["status"] = Status;

            return json;
        }
    }
}