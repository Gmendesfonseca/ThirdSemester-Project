using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Login;
using InnerAPI.Models;
using InnerAPI.Utils;

namespace InnerAPI.Services
{
    public class StudentServices
    {
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

        public Student login(LoginDto user)
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

        public void delete(int id)
        { institutions.SelectMany(i => i.Students).ToList().RemoveAll(usuario => usuario.Id == id); }

    }
}
