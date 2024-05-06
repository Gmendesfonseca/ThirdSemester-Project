using System.Text.RegularExpressions;

namespace InnerAPI.Utils
{
    public class CNPJ
    {
        public static bool IsValid(string CNPJ)
        {
            string pattern = @"^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$";

            return Regex.IsMatch(CNPJ, pattern);
        }
    }
}
