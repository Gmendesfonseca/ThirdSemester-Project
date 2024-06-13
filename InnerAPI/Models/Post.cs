using System;
using System.Collections.Generic;

namespace InnerAPI.Models
{
    public class Post
    {
        #region "Declaração de variáveis"

        private uint _idPost;
        private string _creatorName;
        private string _creatorImage;
        private string _titlePost;
        private string _imagePost;
        private string _description;
        private uint _numLikes;
        private List<Likers> _likes; //ids dos usuarios que curtiram
        private List<Comment> _comments; // idComment, authorName, authorImage, commentContent, dateComment
        private DateOnly _datePost;

        #endregion

        #region "Construtores"

        public Post()
        {
            _likes = new List<Likers>();
            _comments = new List<Comment>();
        }
        public Post(uint idPost, string creatorName, string creatorImage, string titlePost, string imagePost,  string description)
        {
            _idPost = idPost;
            _creatorName = creatorName;
            _creatorImage = creatorImage;
            _titlePost = titlePost;
            _imagePost = imagePost;
            _description = description;
            _numLikes = 0;
            _likes =  new List<Likers>();
            _comments =  new List<Comment>();
            _datePost = DateOnly.FromDateTime(DateTime.Now);

        
        }
        #endregion

        #region "Propriedades"

        public uint IdPost { get => _idPost; set => _idPost = value; }
        public string CreatorName { get => _creatorName; set => _creatorName = value; }
        public string CreatorImage { get => _creatorImage; set => _creatorImage = value; }
        public string TitlePost { get => _titlePost; set => _titlePost = value; }
        public string ImagePost { get => _imagePost; set => _imagePost = value; }
        public uint NumLikes { get => _numLikes; set => _numLikes = value; }
        public List<Likers> Likes { get => _likes; set => _likes = value; }
        public List<Comment> Comments { get => _comments; set => _comments = value; }
        public DateOnly DatePost { get => _datePost; set => _datePost = value; }

        public uint InstitutionId { get; internal set; }

        #endregion

        #region "Métodos"

        public void ReceberCurtida()
        {
            _numLikes++;
        }

        public void ReceberComentario(string comment)
        {
            _comments.Add(comment);
        }

        public void AddContent(string content)
        {
            _contentPosts.Add(content);
        }

        public void RemoveContent(string content)
        {
            _contentPosts.Remove(content);
        }

        #endregion
    }
}
