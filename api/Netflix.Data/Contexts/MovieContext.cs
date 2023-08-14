using Microsoft.EntityFrameworkCore;
using Netflix.Entity;

namespace Netflix.Data.Contexts;
public class MovieContext : DbContext
{
  public MovieContext(DbContextOptions<MovieContext> options) : base(options) { }

  public DbSet<Movie> Movies { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
  }
}
