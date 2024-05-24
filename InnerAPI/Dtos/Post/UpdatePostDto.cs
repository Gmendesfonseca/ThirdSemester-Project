using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Post
{
    public record class UpdatePostDto
    (
        [Required] uint IdPost, 
        string TitlePost = null, 
        List<string> Comments = null, 
        List<string> ContentPosts = null,
        uint? NumLikes = null
    )
    {
        public uint IdPost { get; init; } = IdPost;
        public string TitlePost { get; init; } = TitlePost;
        public List<string> Comments { get; init; } = Comments;
        public List<string> ContentPosts { get; init; } = ContentPosts;  

    }
}
