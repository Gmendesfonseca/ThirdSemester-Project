using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class StudentServices : UserServices, ICRUD
    {
        List<Institution> institutions;
        List<Student> students;

        public StudentServices(SharedService _sharedService) { 
            institutions = _sharedService.Institutions;
            students = _sharedService.Students;
        }

        public Student Register(RegisterStudentDto register)
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
            Student newStudent = new Student(id, register.Name, register.Email, register.Password, register.Matricula, register.Cpf, register.BirthDate, register.Instituicao, register.Curso, register.Periodo, register.Pontuacao);
            institution.Students.Add(newStudent);

            return newStudent;
        }

        public Student Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;
            string domain = email.Split('@')[1];

            var institution = institutions.FirstOrDefault(i => i.Domain == domain);
            Student student = institution.Students.FirstOrDefault(s => s.Email == email && s.Password == password);

            Email Email = new Email();
            if (!Email.IsValid(email))
                throw new ArgumentException("Email inválido.");

            if (student == null)
                throw new ArgumentException("Usuário não encontrado.");

            if (student.Password != password)
                throw new ArgumentException("Senha incorreta.");

            return student;
        }

        public Student Update(int id, Student register)
        {
            Student student = institutions.SelectMany(i => i.Students).FirstOrDefault(s => s.Id == id);
            if (student == null)
            {
                throw new ArgumentException("Usuário não encontrado.");
            }

            student.Name = register.Name;
            student.Email = register.Email;
            student.Password = register.Password;
            student.Matricula = register.Matricula;
            student.CPF = register.CPF;
            student.BirthDate = register.BirthDate;
            student.Institution = register.Institution;
            student.Curso = register.Curso;
            student.Periodo = register.Periodo;
            student.Pontuacao = register.Pontuacao;

            return student;
        }

        public bool Delete(int id)
        {
            institutions.SelectMany(i => i.Students).ToList().RemoveAll(usuario => usuario.Id == id);
            return true;
        }

        public List<Student> GetStudents()
        {
            return students;
        }

        public void Seguir()
        {

        }
    }
}
