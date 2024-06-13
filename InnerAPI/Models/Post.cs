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
        private List<string> _contentPost;
        private DateOnly _datePost;
        private uint _institutionId; 

        #endregion

        #region "Construtores"

        public Post()
        {
            _comments = new List<string>();
            _contentPost = new List<string>();
        }

        public Post(uint idPost, string titlePost, uint numLikes, List<string> comments, List<string> contentPost, DateOnly datePost, uint institutionId)
        {
            _idPost = idPost;
            _titlePost = titlePost;
            _numLikes = numLikes;
            _comments = comments ?? new List<string>();
            _contentPost = contentPost ?? new List<string>();
            _datePost = datePost;
            _institutionId = institutionId;
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

        public List<string> ContentPost
        {
            get { return _contentPost; }
            set { _contentPost = value; }
        }

        public DateOnly DatePost
        {
            get { return _datePost; }
            set { _datePost = value; }
        }

        public uint InstitutionId
        {
            get { return _institutionId; }
            set { _institutionId = value; }
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
            _contentPost.Add(content);
        }

        public void RemoveContent(string content)
        {
            _contentPost.Remove(content);
        }

        #endregion
    }
}
