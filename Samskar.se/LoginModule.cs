using Nancy;
using Nancy.ModelBinding;
using Nancy.Responses;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;

namespace Samskar
{
    public class LoginModule : NancyModule
    {
        private readonly List<User> _adminUsers = new List<User>
        {
            new User
            {
                UserName = "admin",
                Password = "admin"
            }
        };

        public LoginModule() : base("/login")
        {
            Post["/"] = _ => ValidateUser(this.Bind<User>());
        }

        private dynamic ValidateUser(User user)
        {
            if (!_adminUsers.Any(adminUser => adminUser.UserName == user.UserName && adminUser.Password == user.Password))
                return new HtmlResponse(HttpStatusCode.Unauthorized);

            var payload = new Dictionary<string, string>
            {
                { "user", user.UserName },
            };

            var key = ConfigurationManager.AppSettings["jwtkey"];

            return new { Token = JWT.JsonWebToken.Encode(payload, key, JWT.JwtHashAlgorithm.HS256) };
        }
    }

    internal class User
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}