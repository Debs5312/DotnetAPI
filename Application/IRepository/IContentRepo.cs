using Domain.Models;

namespace Application.IRepository
{
    public interface IContentRepo
    {
        Task<IEnumerable<Content>> getContents();
        Task<Content> getSingleContent(int id);
        Task<Content> createContent(Content content);
        Task<Content> updateContent(string content, int id);
        Task deleteContent(int id);
    }
}