using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Login
{
    public record class LoginDto 
    (
        string Email,
        string Password
    );
        

}
