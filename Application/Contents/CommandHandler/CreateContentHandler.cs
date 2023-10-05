using Application.Contents.Command;
using Application.IRepository;
using Domain.Models;
using MediatR;

namespace Application.Contents.CommandHandler
{
    public class CreateContentHandler : IRequestHandler<CreateContent, Content>
    {
        private readonly IContentRepo _repo;

        public CreateContentHandler(IContentRepo repo)
        {
            _repo = repo;
        }
        public async Task<Content> Handle(CreateContent request, CancellationToken cancellationToken)
        {
            var newContent = new Content
            {
                Item = request.PostItem
            };
            return await _repo.createContent(newContent);
        }
    }
}