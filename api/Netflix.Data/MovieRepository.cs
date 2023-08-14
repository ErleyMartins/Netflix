using Microsoft.EntityFrameworkCore;
using Netflix.Data.Contexts;
using Netflix.Data.Helpers;
using Netflix.Data.Interfaces;
using Netflix.Entity;

namespace Netflix.Data;
public class MovieRepository : IMovieRepository
{
  private readonly MovieContext _context;

  public MovieRepository(MovieContext context)
  {
    _context = context;
  }

  public Task<PageList<Movie>> FindAll(PageParams pageParams)
  {
    var query = _context.Movies.OrderByDescending(movie => movie.ReleaseYear);
    return PageList<Movie>.Create(query, pageParams.PageNumber, pageParams.PageSize);
  }

  public Task<Movie?> FindById(string showId)
  {
    return _context.Movies.Where(movie => movie.ShowId == showId)
                          .FirstOrDefaultAsync();
  }
}
