using Domain.Models;
using MediatR;

namespace Application.Contents.Query
{
    public class GetAllContents : IRequest<IEnumerable<Content>>
    {
        
    }
}