using Application.Contents.Query;
using Application.IRepository;
using Domain.Models;
using MediatR;

namespace Application.Contents.QueryHandler
{
    public class GetContentHandler : IRequestHandler<GetAllContents, IEnumerable<Content>>
    {
        private readonly IContentRepo _repo;

        public GetContentHandler(IContentRepo repo)
        {
            _repo = repo;
        }
        public async Task<IEnumerable<Content>> Handle(GetAllContents request, CancellationToken cancellationToken)
        {
            return await _repo.getContents();
        }
    }
}