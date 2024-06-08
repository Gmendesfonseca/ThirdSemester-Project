using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class StudentServices
    {
        List<Branch> institutions;
        List<Student> students;

        public StudentServices(SharedService _sharedService)
        {
            institutions = _sharedService.Branches;
        }

        public Student Register(RegisterStudentDto register)
        {
            var institution = GetInstitution(register.Email);
            students = institution.Students;
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }

            // Verifica se o estudante já existe
            var existingStudent = students.Exists(r => r.Registration == register.Matricula || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingStudent)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            // Cria e adiciona o novo estudante à instituição correta
            uint id = (uint)students.Count + 1;
            Student newStudent = new Student(id, register.Name, register.Email, register.Password, register.Matricula, register.Cpf, register.BirthDate, register.Instituicao, register.Curso, register.Periodo, register.Pontuacao);
            //institution.Students.Add(newStudent);
            students.Add(newStudent);

            return newStudent;
        }

        public Student Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            var institution = GetInstitution(email);
            students = institution.Students;
            if (institution == null)
                throw new ArgumentException("Institution not found.");

            Student student = students.FirstOrDefault(s => s.Email == email && s.Password == password);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Invalid email.");

            if (student == null)
                throw new ArgumentException("User not found.");

            if (student.Password != password)
                throw new ArgumentException("Incorrect password.");

            return student;
        }

        public Student Update(int id, Student newStudent)
        {
            Branch institution = GetBranch(newStudent.Email);
            if (institution == null)
            {
                throw new ArgumentException("Este usuário não encontrado.");
            }
            Student student = institution.Students.FirstOrDefault(s => s.Id == id);

            if (student == null)
            {
                throw new ArgumentException("Usuário não encontrado.");
            }
            student = newStudent;

            return student;
        }

        public bool Delete(int id)
        {
            institutions.SelectMany(i => i.Students).ToList().RemoveAll(usuario => usuario.Id == id);
            return true;
        }

        public List<Student> GetStudents(string email)
        {
            Branch institution = GetBranch(email);
            return institution.Students;
        }

        public Branch GetBranch(string email)
        {
            var domain = email.Split('@')[1];
            return institutions.FirstOrDefault(i => i.Domain == domain);
        }

        public void Seguir()
        {

        }
    }
}
