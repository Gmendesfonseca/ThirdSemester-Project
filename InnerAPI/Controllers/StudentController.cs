using InnerAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace InnerAPI.Controllers
{
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
