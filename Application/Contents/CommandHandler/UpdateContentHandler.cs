using Application.Contents.Command;
using Application.IRepository;
using Domain.Models;
using MediatR;

namespace Application.Contents.CommandHandler
{
    public class UpdateContentHandler : IRequestHandler<UpdateContent, Content>
    {
        private readonly IContentRepo _repo;

        public UpdateContentHandler(IContentRepo repo)
        {
            _repo = repo;
        }
        public async Task<Content> Handle(UpdateContent request, CancellationToken cancellationToken)
        {
            return await _repo.updateContent(request.UpdateItem, request.Id);
        }
    }
}