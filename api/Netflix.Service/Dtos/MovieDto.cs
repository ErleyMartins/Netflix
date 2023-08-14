using Netflix.Entity;

namespace Netflix.Service.Dtos;
public class MovieDto
{
  public MovieDto(Movie movie)
  {
    Id = movie.ShowId;
    Type = movie.Type;
    Title = movie.Title;
    Director = movie.Director;
    Cast = movie.Cast;
    Country = movie.Country;
    DateAdded = movie.DateAdded;
    ReleaseYear = movie.ReleaseYear;
    Rating = movie.Rating;
    Duration = movie.Duration;
    ListedIn = movie.ListedIn;
    Description = movie.Description;
  }

  public string Id { get; set; }

  public string Type { get; set; }

  public string Title { get; set; }

  public string Director { get; set; }

  public string Cast { get; set; }

  public string Country { get; set; }

  public string DateAdded { get; set; }

  public int ReleaseYear { get; set; }

  public string Rating { get; set; }

  public string Duration { get; set; }

  public string ListedIn { get; set; }

  public string Description { get; set; }
}
