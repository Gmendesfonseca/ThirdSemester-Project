using InnerAPI.Dtos.Follower;
using InnerAPI.Dtos.Post;
using InnerAPI.Models;

namespace InnerAPI.Endpoints
{
    public static class PostEndpoint
    {
        private static readonly List<PostDto> post = [];
        public static RouteGroupBuilder MapPostEndpoint(this WebApplication app)
        {
            var group = app.MapGroup("post").WithParameterValidation();

            //GET /post/
            group.MapGet("/", () => post);

            return group;
        }
    }
}
