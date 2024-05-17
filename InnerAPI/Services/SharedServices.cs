using InnerAPI.Dtos.Follower;
using InnerAPI.Dtos.Groups;
using InnerAPI.Dtos.Notification;
using InnerAPI.Dtos.Post;
using InnerAPI.Models;
using InnerAPI.Utils;
using System.Xml.Linq;

namespace InnerAPI.Services
{
    public class SharedService
    {
        private static List<Branch> institutions = new List<Branch>();

        public SharedService()
        {
            uint id = 0;
            string name = "Universidade Exemplo";
            string email = "universidade@exemplo.com";
            string password = "12345678";
            string cnpj = "12345678000199";
            string domain = "exemplo.com";


            institutions.Add(new Branch(id, name, email, password, cnpj, domain));
        }

        public List<Branch> Institutions { get { return institutions; } }
        public void AddInstitution(Branch institution){ institutions.Add(institution); }
        
    }
}
