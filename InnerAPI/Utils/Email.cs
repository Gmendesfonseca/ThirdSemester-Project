using System.Text.RegularExpressions;

namespace InnerAPI.Utils
{
    public class Email
    {
        public static bool IsValid(string email)
        {
            string pattern = @"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

            return Regex.IsMatch(email, pattern);
        }

    }
}
