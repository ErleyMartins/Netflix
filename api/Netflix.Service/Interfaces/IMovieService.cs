using Netflix.Data.Helpers;
using Netflix.Service.Dtos;

namespace Netflix.Service.Interfaces;
public interface IMovieService
{
  Task<PageList<MovieDto>> GetAll(PageParams pageParams);
  Task<MovieDto?> GetById(string id);
}
