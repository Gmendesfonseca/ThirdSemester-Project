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
            institutions = sharedService.Branches;
        }

        public Stack<Post> GetPosts(int id)
        {
            var institution = institutions.Find(inst => inst.Id == id);
            if (institution == null)
            {
                throw new InvalidOperationException("Instituição não encontrada.");
            }
            Stack<Post> posts = institution.Feed;
            return posts;
        }

        public void Register(RegisterPostDto postDto)
        {
            //Criar um novo post com os dados do DTO
            Post newPost = new Post(
                postDto.IdPost,
                postDto.TitlePost,
                postDto.NumLikes,
                new List<string>(),  //Se necessário, ajuste aqui para a lista de comentários
                new List<string> { postDto.ContentPost },
                postDto.DatePost,
                postDto.InstitutionId
            );

            //Encontrar a instituição pelo ID e adicionar o novo post à pilha de posts
            var institution = institutions.Find(inst => inst.Id == postDto.InstitutionId);
            if (institution != null)
            {
                institution.Feed.Push(newPost);
            }
            else
            {
                throw new InvalidOperationException("Instituição não encontrada.");
            }
        }

        public Post Update(int id, Post updatedPost)
        {
            Stack<Post> posts = institutions.Find(institution => institution.Id == updatedPost.InstitutionId).Feed;
            Post postToUpdate = posts.FirstOrDefault(p => p.IdPost == id);
            if (postToUpdate == null)
            {
                return null;
            }
            postToUpdate = updatedPost;
            return postToUpdate;
        }

        public bool Delete(int id) //Bucar e remover todos os posts com o ID
        {
            //PostServices postServices = new PostServices(new SharedService());
            //foreach (var institution in institutions)
            //{
            //    Stack<Post> posts = institution.Feed;
            //    Post post = posts.FirstOrDefault(p => p.IdPost == id);
            //    if (post != null)
            //    {
            //        post.RemoveContent(post);
            //        return true;
            //    }
            //}
            return true;
        }
    }
}
