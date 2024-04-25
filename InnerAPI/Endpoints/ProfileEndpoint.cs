using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Profile;
using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class ProfileEndpoint
    {
        private static readonly List<ProfileDto> profile = [];
        public static RouteGroupBuilder MapProfileEndpoint(this WebApplication app)
        {
            var group = app.MapGroup("profile").WithParameterValidation();

            //GET /profile/
            group.MapGet("/", () => profile);

            return group;
        }
    }
}
