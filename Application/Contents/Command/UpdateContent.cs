using Domain.Models;
using MediatR;

namespace Application.Contents.Command
{
    public class UpdateContent : IRequest<Content>
    {
        public int Id { get; set; }
        public string UpdateItem { get; set; }
    }
}