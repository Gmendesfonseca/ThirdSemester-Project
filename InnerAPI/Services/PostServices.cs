using InnerAPI.Dtos.Post;
using InnerAPI.Models;

namespace InnerAPI.Services
{
    public class PostServices
    {
        Stack<Post> posts;
        List<Branch> institutions;
        public PostServices(SharedService sharedService)
        {
            List<Branch> institutions = sharedService.Branches;
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

        public Post Update(int id, Post updatedPost)
        {
            Stack<Post> posts = institutions.Find(institution => institution.Id == updatedPost.InstitutionId).Posts;
            Post postToUpdate = posts.FirstOrDefault(p => p.Id == id);
            if (postToUpdate == null)
            {
                return null;
            }
            postToUpdate = updatedPost;
            return postToUpdate;
        }

        public bool Delete(int id)
        { institutions.SelectMany(i => i.Posts).ToList().RemoveAll(usuario => usuario.Id == id); return true; }
    }
}
