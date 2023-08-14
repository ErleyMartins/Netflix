using Netflix.Data.Helpers;
using Netflix.Data.Interfaces;
using Netflix.Service.Dtos;
using Netflix.Service.Interfaces;

namespace Netflix.Service;
public class MovieService : IMovieService
{
  private readonly IMovieRepository _repository;

  public MovieService(IMovieRepository repository)
  {
    _repository = repository;
  }

  public async Task<PageList<MovieDto>> GetAll(PageParams pageParams, string? terms = null)
  {
    var result = await _repository.FindAll(pageParams, terms);
    var data = result.Select(movie => new MovieDto(movie)).ToList();

    return PageList<MovieDto>.Parse(data, result.TotalCount, result.CurrentPage, result.PageSize);
  }

  public async Task<MovieDto?> GetById(string id)
  {
    var movie = await _repository.FindById(id);

    if (movie == null)
    {
      return null;
    }

    return new MovieDto(movie);
  }
}
