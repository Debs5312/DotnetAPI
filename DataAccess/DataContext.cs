using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions opt) : base(opt)
        {
            
        }

        public DbSet<Content> Contents { get; set; } 
    }
}