using IdentityServer.Models;
using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Services
{
    public interface IAuthService
    {
        Task<IdentityResult> RegisterUserAsync(RegisterRequest request);
        Task<string> AuthenticateUserAsync(LoginRequest request);
    }
}
