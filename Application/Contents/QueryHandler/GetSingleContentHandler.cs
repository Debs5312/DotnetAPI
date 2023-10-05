using Application.Contents.Query;
using Application.IRepository;
using Domain.Models;
using MediatR;

namespace Application.Contents.QueryHandler
{
    public class GetSingleContentHandler : IRequestHandler<GetContentByID, Content>
    {
        private readonly IContentRepo _repo;

        public GetSingleContentHandler(IContentRepo repo)
        {
            _repo = repo;
        }
        public async Task<Content> Handle(GetContentByID request, CancellationToken cancellationToken)
        {
            return await _repo.getSingleContent(request.ContentId);
        }
    }
}