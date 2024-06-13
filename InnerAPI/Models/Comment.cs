namespace InnerAPI.Models
{
    public class Comment
    {
      private uint _idComment;
      private string _authorName;
      private string _authorImage;
      private string _commentContent;
      private DateOnly _dateComment;

      public Comment(uint idComment, string authorName, string authorImage, string commentContent, DateOnly dateComment)
      {
          _idComment = idComment;
          _authorName = authorName;
          _authorImage = authorImage;
          _commentContent = commentContent;
          _dateComment = dateComment;
      }

      public uint IdCommenter
      {
          get { return _idComment; }
          set { _idComment = value; }
      }

      public string AuthorName
      {
          get { return _authorName; }
          set { _authorName = value; }
      }

      public string AuthorImage
      {
          get { return _authorImage; }
          set { _authorImage = value; }
      }

      public string CommentContent
      {
          get { return _commentContent; }
          set { _commentContent = value; }
      }

      public DateOnly DateComment
      {
          get { return _dateComment; }
          set { _dateComment = value; }
      }
    }
}