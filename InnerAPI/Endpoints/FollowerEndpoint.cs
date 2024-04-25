using InnerAPI.Dtos.Aluno;
using InnerAPI.Dtos.Follower;
using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class FollowerEndpoint
    {
        private static readonly List<FollowerDto> follower = [];
        public static RouteGroupBuilder MapFollowersEndpoint(this WebApplication app)
        {
            var group = app.MapGroup("follower").WithParameterValidation();

            //GET /follower/
            group.MapGet("/", () => follower);

            return group;
        }
    }
}
