using System.Text.RegularExpressions;

namespace InnerAPI.Utils
{
    public class CPF
    {
        public static bool IsValid(string CPF)
        {
            string pattern = @"^\d{3}\.\d{3}\.\d{3}-\d{2}$";

            return Regex.IsMatch(CPF, pattern);
        }
    }
}
