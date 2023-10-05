using Domain.Models;
using MediatR;

namespace Application.Contents.Command
{
    public class DeleteContent : IRequest<Content>
    {
        public int Id { get; set; }
    }
}