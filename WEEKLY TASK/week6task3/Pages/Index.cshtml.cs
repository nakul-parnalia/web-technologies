using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AspNetRegistration.Pages
{
    // Unique Strength: Strong Typing and "Model Binding"
    public class IndexModel : PageModel
    {
        public void OnGet()
        {
            // Runs when page loads
        }

        // Step 4: Process on Server
        public JsonResult OnPostRegister(string username, string email, string password)
        {
            // Unique Strength: Server-side validation is robust and compiled
            if (string.IsNullOrEmpty(username) || username == "admin")
            {
                return new JsonResult(new { success = false, message = "Invalid or taken username." });
            }

            // Simulate Database Integration (In real life, use Entity Framework here)
            // var user = new User { Name = username, Email = email };
            // _db.Users.Add(user);
            // _db.SaveChanges();

            // Simulate "success"
            return new JsonResult(new { 
                success = true, 
                message = $"User {username} registered successfully in the system!" 
            });
        }
    }
}
