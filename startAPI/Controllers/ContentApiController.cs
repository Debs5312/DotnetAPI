using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Contents.Command;
using Application.Contents.Query;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace startAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContentApiController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ContentApiController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetContent(string id)
        {
            var item = new GetContentByID { ContentId = Int32.Parse(id) };
            var content = await _mediator.Send(item);
            if(content != null) return Ok(content);
            else return NotFound();
        }

        [HttpGet]
        public async Task<IActionResult> GetContents()
        {
            var item = new GetAllContents {};
            var content = await _mediator.Send(item);
            if(content.Count() > 0) return Ok(content);
            else return BadRequest();
        }

        [HttpPost("addContent")]
        public async Task<IActionResult> PostContent([FromBody] string item)
        {
            var newContent = new CreateContent { PostItem = item };
            var content = await _mediator.Send(newContent);
            if(content != null) return StatusCode(201, content);
            else return StatusCode(500);
        }

        [HttpPut("updateContent/{id}")]
        public async Task<IActionResult> UpdateSingleContent([FromBody] string item, string id)
        {
            var updateContent = new UpdateContent { Id = Int32.Parse(id),  UpdateItem = item };
            var content = await _mediator.Send(updateContent);
            if(content != null) return Ok(content);
            else return StatusCode(500);
        }

        [HttpDelete("deleteContent/{id}")]
        public async Task<IActionResult> DeleteContent(string id)
        {
            var deleteContent = new DeleteContent { Id = Int32.Parse(id) };
            var value = await _mediator.Send(deleteContent);
            return Ok(value); 
        }

        
    }
}