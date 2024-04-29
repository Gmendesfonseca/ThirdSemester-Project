using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class TeacherEndpoint
    {

        public static RouteGroupBuilder MapTeacherEndpoint(this WebApplication app)
        {
            var group = app.MapGroup("teacher").WithParameterValidation();

            //GET /teacher/
            //group.MapGet("/", () => teacher);

            return group;
        }
    }
}
