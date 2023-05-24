using Microsoft.EntityFrameworkCore;

namespace BackEndAPI.Models
{
    public class DatabaseContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Server=localhost;Database=Lotus;Uid=root;Pwd=;",
                new MySqlServerVersion(new Version(8, 0, 11)));
        }

        public DbSet<Manager> Usuarios { get; set; } = null!;
    }
}
