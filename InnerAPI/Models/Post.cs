using System;
using System.Collections.Generic;

namespace InnerAPI.Models
{
    public class Post
    {
        #region "Declaração de variáveis"

        private uint _idPost;
        private uint _creatorId; 
        private string _creatorName;
        private string _creatorImage;
        private string _titlePost;
        private string _imagePost;
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

        public Post(uint idPost, string titlePost, uint numLikes, DateOnly datePost)
        {
            _idPost = idPost;
            _titlePost = titlePost;
            _numLikes = numLikes;
            _likes = new List<Likers>();
            _comments =  new List<Comment>();
            _datePost = datePost;
            
        
        }





        #endregion

        #region "Propriedades"

        public uint IdPost
        {
            get { return _idPost; }
            set { _idPost = value; }
        }

        public string TitlePost
        {
            get { return _titlePost; }
            set { _titlePost = value; }
        }

        public uint NumLikes
        {
            get { return _numLikes; }
            set { _numLikes = value; }
        }

        public List<string> Comments
        {
            get { return _comments; }
            set { _comments = value; }
        }

        public List<string> ContentPosts
        {
            get { return _contentPosts; }
            set { _contentPosts = value; }
        }

        public DateOnly DatePost
        {
            get { return _datePost; }
            set { _datePost = value; }
        }

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
