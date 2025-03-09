using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Repositories
{
    public interface IUserRepository
    {
        Task<IdentityUser> FindByEmailAsync(string email);
    }
}
