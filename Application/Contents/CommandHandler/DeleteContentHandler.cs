using Application.Contents.Command;
using Application.IRepository;
using Domain.Models;
using MediatR;

namespace Application.Contents.CommandHandler
{
    public class DeleteContentHandler : IRequestHandler<DeleteContent, Content>
    {
        private readonly IContentRepo _repo;

        public DeleteContentHandler(IContentRepo repo)
        {
            _repo = repo;
        }
        public async Task<Content> Handle(DeleteContent request, CancellationToken cancellationToken)
        {
            var item = await _repo.getSingleContent(request.Id);
            await _repo.deleteContent(request.Id);
            return item;
        }
    }
}