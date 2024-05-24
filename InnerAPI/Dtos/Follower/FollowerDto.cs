using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Follower
{
    public record class FollowerDto
    (
        [Required] uint IdFollower,
        [Required] string NameFollower, 
        List<string> Followers
    )
    {
        public List<string> Followers { get; set; } = Followers;
    }
}