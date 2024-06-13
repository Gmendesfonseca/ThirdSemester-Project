namespace InnerAPI.Models
{
    public class Likers
    {
      private uint _idLiker;
      private string _accountTypeLiker;

      public Likers(uint idLiker, string accountTypeLiker)
      {
          _idLiker = idLiker;
          _accountTypeLiker = accountTypeLiker;
      }

      public uint IdLiker
      {
          get { return _idLiker; }
          set { _idLiker = value; }
      }

      public string AccountTypeLiker
      {
          get { return _accountTypeLiker; }
          set { _accountTypeLiker = value; }
      }
    }
}