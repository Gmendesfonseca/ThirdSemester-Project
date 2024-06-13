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

        public Stack<Post> GetPosts(uint id)
        {
            var institution = institutions.Find(institution => institution.Id == id);
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }
            Stack<Post> posts = institution.Feed;
            return posts;
        }

        public void Register(uint branchId, RegisterPostDto post)
        {
            posts = GetPosts(branchId);
            var institution = institutions.Find(institution => institution.Id == branchId);
            if (institution == null)
            {
                throw new ArgumentException("Instituição não encontrada.");
            }
            uint id = (uint)posts.Count + 1;
            Post newPost = new Post(id, post.CreatorName, post.CreatorImage, post.Title, post.Image, post.Description);
            institution.addPost(newPost.Id);
            posts.Push(newPost);
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
