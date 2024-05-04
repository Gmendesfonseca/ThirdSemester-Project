using InnerAPI.Models;
using InnerAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace InnerAPI.Controllers
{
    // GET /student
    // GET /student/{id}
    // POST /student
    // PUT /student
    //DELETE /student
    public class StudentController : ControllerBase
    {
        List<Student> students;
        private readonly SharedService _sharedService;

        public StudentController(SharedService sharedService)
        {
            _sharedService = sharedService;
            students = _sharedService.GetStudent();
        }

        public List<Student> GetStudents()
        {
            return this.students;
        }
    }
}
