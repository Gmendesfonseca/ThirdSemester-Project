using InnerAPI.Models;
using InnerAPI.Services;
using InnerAPI.Dtos.Post;

namespace InnerAPI.Controllers
{
    public static class PostController
    {
        public static RouteGroupBuilder MapPostEndpoint(this WebApplication app, SharedService sharedServices) {
            PostServices postServices = new PostServices(sharedServices);
            var group = app.MapGroup("post").WithParameterValidation();

            // GET /post/{id}
            group.MapGet("{id}", (int id) =>
            {
                return Results.Ok(postServices.GetPosts(id));
            });

            // POST /post/{id}
            group.MapPost("{id}", (RegisterPostDto newPost) =>
            {
                postServices.Register(newPost);
                return Results.Created($"/post/{newPost.Id}", newPost);
            });

            // PUT /post/{id}
            group.MapPut("{id}", (int id, Post updatedPost) =>
            {
                var result = postServices.Update(id, updatedPost);
                if (result == null)
                {
                    return Results.NotFound();
                }
                return Results.Ok(result);
            });

            // DELETE /post/{id}
            group.MapDelete("{id}", (int id) =>
            {
                bool deleted = postServices.Delete(id);
                if (!deleted)
                {
                    return Results.NotFound();
                }
                return Results.NoContent();
            });

            return group;
        }
    }
}
