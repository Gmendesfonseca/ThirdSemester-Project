using InnerAPI.Dtos.Post;
using InnerAPI.Models;

namespace InnerAPI.Services
{
    public class PostServices
    {
        Stack<Post> posts;
        List<Institution> institutions;
        public PostServices(SharedService sharedService)
        {
            List<Institution> institutions = sharedService.Institutions;
        }

        public Stack<Post> GetPosts(int id)
        {
            Stack<Post> posts = institutions.Find(institution => institution.Id == id).Posts;
            return posts;
        }

        public void Register(RegisterPostDto post)
        {
            Post newPost = new Post(post.Id, post.Title, post.Content, post.InstitutionId);
            institutions.Find(institution => institution.Id == post.InstitutionId).Posts.Push(newPost);
        }
    }
}
