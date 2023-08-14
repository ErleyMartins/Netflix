using Netflix.Data.Helpers;
using Netflix.Entity;

namespace Netflix.Data.Interfaces;
public interface IMovieRepository
{
  Task<PageList<Movie>> FindAll(PageParams pageParams);
  Task<Movie?> FindById(string showId);
}
