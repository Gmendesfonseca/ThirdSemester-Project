namespace InnerAPI.Models
{
    //Matriz, Teste
    public class HeadOffice : Institution
    {
        List<Branch> branches;
        Stack<Post> posts;
        string domain;
        

        public HeadOffice()
        {
            branches = new List<Branch>();
        }
    }
}
