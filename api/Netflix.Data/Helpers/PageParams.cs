namespace Netflix.Data.Helpers;
public class PageParams
{
  private const int _defaultPageNumber = 1;
  private const int _defaultPageSize = 30;
  public int PageNumber { get; set; } = _defaultPageNumber;
  public int PageSize { get; set; } = _defaultPageSize;
}
