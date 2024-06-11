﻿using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Post
{
    public record class CreatePostDto
    (
        [Required] string TitlePost,
        List<string> Comments, 
        List<string> ContentPosts,
        [Required] DateOnly Datepost
    )
    {
        public string TitlePost {  get; init; } = TitlePost;
        public List<string> Comments { get; init; } = Comments ?? new List<string>(); 
        public List<string> ContentPosts { get; init; } = ContentPosts ?? new List<string>();
        public DateOnly DateOnly { get; init; } = Datepost;
    }
    
}
