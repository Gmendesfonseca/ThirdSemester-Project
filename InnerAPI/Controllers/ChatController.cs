using InnerAPI.Services;

namespace InnerAPI.Controllers
{
    public static class ChatController
    {
        public static RouteGroupBuilder MapChatEndpoint(this WebApplication app, SharedService  sharedServices)
        {
            ChatServices chatServices = new ChatServices(sharedServices);
            var group = app.MapGroup("chat").WithParameterValidation();

            //GET /{id}/chats
            group.MapGet("/{id}/chats", (int id) =>
            {
                return Results.Ok(chatServices.GetChats().Where(s => s.UserId == id));
            });

            // GET /chat/{id}
            group.MapGet("/{id}", (int id) =>
            {
                return Results.Ok(chatServices.GetChats().FirstOrDefault(s => s.Id == id));
            });

            // POST /chat/register
            group.MapPost("/register", (RegisterChatDto newChat) =>
            {
                Chat chat = chatServices.Register(newChat);

                return Results.Created($"/chat/{chat.Id}", chat);
            });

            // PUT /chat/{id}
            group.MapPut("/{id}", (int id, Chat updatedChat) =>
            {
                var result = chatServices.Update(id, updatedChat);
                if (result == null)
                {
                    return Results.NotFound();
                }
                return Results.Ok(result);
            });

            // DELETE /chat/{id}
            group.MapDelete("/{id}", (int id) =>
            {
                bool deleted = chatServices.Delete(id);
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
