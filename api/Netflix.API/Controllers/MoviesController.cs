using Microsoft.AspNetCore.Mvc;
using Netflix.Data.Helpers;
using Netflix.Service.Dtos;
using Netflix.Service.Interfaces;

namespace Netflix.API.Controllers;

[ApiController]
[Route("[controller]")]
public class MoviesController : ControllerBase
{
    private readonly ILogger<MoviesController> _logger;
    private readonly IMovieService _movieService;

    public MoviesController(ILogger<MoviesController> logger, IMovieService movieService)
    {
        _logger = logger;
        _movieService = movieService;
    }

    [HttpGet]
    public async Task<ActionResult<PageList<MovieDto>>> GetAll([FromQuery] PageParams pageParams, string? terms = null)
    {
        try
        {
            var movies = await _movieService.GetAll(pageParams, terms);

            if (movies.Any())
            {
                return Ok(movies);
            }

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message, ex);
            throw;
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MovieDto>> GetById(string id)
    {
        try
        {
            if (string.IsNullOrWhiteSpace(id))
            {
                return NoContent();
            }

            var movie = await _movieService.GetById(id);

            if (movie == null)
            {
                return NoContent();
            }

            return Ok(movie);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message, ex);
            throw;
        }
    }
}
