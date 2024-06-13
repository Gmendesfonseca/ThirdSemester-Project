using InnerAPI.Dtos.Courses;
using InnerAPI.Models;

namespace InnerAPI.Services
{
    public class CourseServices
    {
        public Course Register(RegisterCourseDto registerCourseDto) => null;
        public CourseServices Update(int id, Course course) => null;

        public bool Delete(int id) 
        {
            return true;
        }

        public void GetCourses() { }

        public CourseServices(SharedService sharedService) { }
    }
}
