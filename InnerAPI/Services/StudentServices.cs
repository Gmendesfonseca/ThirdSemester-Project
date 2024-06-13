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
            students = _sharedService.Students;
            institutions = _sharedService.Branches;
        }

        public Student Register(uint branchId, RegisterStudentDto register)
        {
            var institution = institutions.FirstOrDefault(i => i.Id == branchId);
            
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }

            var existingStudent = students.Exists(r => r.Registration == register.Matricula || r.Email == register.Email || r.CPF == register.Cpf);
            if (existingStudent)
            {
                throw new ArgumentException("Este email já está sendo usado por outro usuário.");
            }

            // Cria e adiciona o novo estudante à instituição correta
            uint id = (uint)students.Count + 1;
            Student newStudent = new Student(id, register.Name, register.Email, register.Password, register.Matricula, register.Cpf, register.BirthDate, register.Instituicao, register.Curso, register.Periodo, register.Pontuacao);

            institution.addStudent(newStudent.Id);
            students.Add(newStudent);

            return newStudent;
        }

        public Student Login(LoginDto user)
        {
            string email = user.Email;
            string password = user.Password;

            var institution = GetBranch(email);
            if (institution == null)
                throw new ArgumentException("Institution not found.");

            students = institution.Students;

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
            student.Name = newStudent.Name;
            student.Email = newStudent.Email;
            student.Password = newStudent.Password;
            student.Registration = newStudent.Registration;
            student.CPF = newStudent.CPF;
            student.BirthDate = newStudent.BirthDate;
            //student.Instituicao = newStudent.Instituicao;
            //student.Instituicao = newStudent.Instituicao;
            student.Curso = newStudent.Curso;
            student.Periodo = newStudent.Periodo;
           // student.Pontuacao = newStudent.Pontuacao;

            return student;
        }

        public bool Delete(int id)
        {
            foreach (var institution in institutions)
            {
                var student = institution.Students.FirstOrDefault(s => s.Id == id);
                if (student != null)
                {
                    institution.Students.Remove(student);
                    return true;
                }
            }
            return false;
        }
        // {
        //     institutions.SelectMany(i => i.Students).ToList().RemoveAll(usuario => usuario.Id == id);
        //     return true;
        // }

        public List<Student> GetStudents()
        public List<Student> GetStudents()
        {
            return institutions.SelectMany(i => i.Students).ToList();
            //Branch institution = GetBranch(email);
            //if (institution == null)
            //{
            //    throw new ArgumentException("Instituição não encontrada.");
            //}
            //return institution.Students;
            return institutions.SelectMany(i => i.Students).ToList();
            //Branch institution = GetBranch(email);
            //if (institution == null)
            //{
            //    throw new ArgumentException("Instituição não encontrada.");
            //}
            //return institution.Students;
        }

        public Branch GetBranch(string email)
        {
            var domain = email.Split('@')[1];
            return institutions.FirstOrDefault(i => i.Domain == domain) ?? throw new ArgumentException("Instituição não encontrada.");

        }

        public void Seguir()
        {
            //falta implementar
        }
    }
}
