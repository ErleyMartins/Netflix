using Netflix.Data.Helpers;
using Netflix.Service.Dtos;

namespace Netflix.Service.Interfaces;
public interface IMovieService
{
  Task<PageList<MovieDto>> GetAll(PageParams pageParams, string? terms = null);
  Task<MovieDto?> GetById(string id);
}
