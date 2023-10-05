using Domain.Models;
using MediatR;

namespace Application.Contents.Query
{
    public class GetContentByID : IRequest<Content>
    {
        public int ContentId { get; set; }
    }
}