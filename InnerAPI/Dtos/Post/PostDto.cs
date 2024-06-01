using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Post
{
    public record class PostDto
    (
      [Required] uint IdPost,
      [Required] string TitlePost,
      [Required] uint NumLikes,
      List<string> Comments,
      List<string> ContentPosts,
      [Required] DateOnly DatePost

    )
    {
        public string TitlePost { get; init; } = TitlePost;
        public List<string> Comments { get; init; } = Comments;
        public List<string> ContentPosts { get; init; } = ContentPosts;
        public DateOnly DatePost { get; init; } = DatePost;

    }
}