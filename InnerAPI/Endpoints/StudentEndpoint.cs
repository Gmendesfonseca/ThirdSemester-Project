using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class StudentEndpoint
    {
        public static RouteGroupBuilder MapStudentEndpoint(this WebApplication app)
        {
            var group = app.MapGroup("student").WithParameterValidation();

            ////GET /instituicao/
            //group.MapGet("/", () => instituicao);

            return group;
        }
    }
}
