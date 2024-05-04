using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Login
{
    public record class LoginDto 
    (
        int type,
        string Email,
        string Password
    );
        

}
