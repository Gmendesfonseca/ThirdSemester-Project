using System.ComponentModel.DataAnnotations;

namespace InnerAPI.Dtos.Login
{
    public record class LoginDto 
    (
        [Required]string Email,
        [Required]string Password
    );
        

}
