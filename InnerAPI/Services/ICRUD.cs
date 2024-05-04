using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Institution;
using InnerAPI.Dtos.Login;
using InnerAPI.Models;

namespace InnerAPI.Services
{
    public interface ICRUD<T>
    {
        void Add(T entity);
        List<T> Get();
        void Update();
        void Delete();

        void Register();
        void Login();
        void Logout();

        T Find(int id);
        T FindById(int id);
        T FindByName(string name);
        T FindByEmail(string email);
    }
}
