using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Netflix.Entity;
public class Movie
{
  public Movie(string showId, string type, string title, string director, string cast, string country, string dateAdded, int releaseYear, string rating, string duration, string listedIn, string description)
  {
    ShowId = showId;
    Type = type;
    Title = title;
    Director = director;
    Cast = cast;
    Country = country;
    DateAdded = dateAdded;
    ReleaseYear = releaseYear;
    Rating = rating;
    Duration = duration;
    ListedIn = listedIn;
    Description = description;

  }

  [Key]
  [Column(name: "show_id")]
  public string ShowId { get; set; }

  [Column(name: "type")]
  public string Type { get; set; }

  [Column(name: "title")]
  public string Title { get; set; }

  [Column(name: "director")]
  public string Director { get; set; }

  [Column(name: "cast")]
  public string Cast { get; set; }

  [Column(name: "country")]
  public string Country { get; set; }

  [Column(name: "date_added")]
  public string DateAdded { get; set; }

  [Column(name: "release_year")]
  public int ReleaseYear { get; set; }

  [Column(name: "rating")]
  public string Rating { get; set; }

  [Column(name: "duration")]
  public string Duration { get; set; }

  [Column(name: "listed_in")]
  public string ListedIn { get; set; }

  [Column(name: "description")]
  public string Description { get; set; }
}
