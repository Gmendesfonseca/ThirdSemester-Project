using System.Text.RegularExpressions;

namespace InnerAPI.Utils
{
    public class Domain
    {
        public static bool IsValid(string domain)
        {
            string pattern = @"^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$";

            return Regex.IsMatch(domain, pattern);
        }
    }
}
