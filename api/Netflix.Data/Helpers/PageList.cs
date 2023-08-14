using Microsoft.EntityFrameworkCore;

namespace Netflix.Data.Helpers;
public class PageList<T> : List<T>
{
  public int CurrentPage { get; set; }
  public int TotalPages { get; set; }
  public int PageSize { get; set; }
  public int TotalCount { get; set; }

  public PageList(List<T> data, int totalCount, int currentPage, int pageSize)
  {
    TotalCount = totalCount;
    PageSize = pageSize;
    CurrentPage = currentPage;
    TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize);
    AddRange(data);
  }

  public static PageList<T> Parse(List<T> data, int totalCount, int currentPage, int pageSize)
  {
    return new PageList<T>(data, totalCount, currentPage, pageSize);
  }

  public static async Task<PageList<T>> Create(IQueryable<T> source, int pageNumber, int pageSize)
  {
    int totalCount = await source.CountAsync();
    var data = await source.Skip(pageNumber)
                           .Take(pageSize)
                           .ToListAsync();

    return new PageList<T>(data, totalCount, pageNumber, pageSize);
  }
}
