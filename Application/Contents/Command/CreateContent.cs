using Domain.Models;
using MediatR;

namespace Application.Contents.Command
{
    public class CreateContent : IRequest<Content>
    {
        public string PostItem { get; set; }
    }
}