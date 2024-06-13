using System;
using System.Collections.Generic;

namespace InnerAPI.Models
{
    public class Post
    {
        #region "Declaração de variáveis"

        private uint _idPost;
        private string _titlePost;
        private uint _numLikes;
        private List<string> _comments;
        private List<string> _contentPosts;
        private DateOnly _datePost;

        #endregion

        #region "Construtores"

        public Post()
        {
            _comments = new List<string>();
            _contentPosts = new List<string>();
        }

        public Post(uint idPost, string titlePost, uint numLikes, List<string> comments, List<string> contentPosts, DateOnly datePost)
        {
            _idPost = idPost;
            _titlePost = titlePost;
            _numLikes = numLikes;
            _comments = comments ?? new List<string>();
            _contentPosts = contentPosts ?? new List<string>();
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
