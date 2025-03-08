using IdentityServer.DTO;
using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Services
{
    public interface ITokenGenerationService
    {
        Task<TokenResponse> GenerateTokenAsync(IdentityUser user, String password);
    }
}
