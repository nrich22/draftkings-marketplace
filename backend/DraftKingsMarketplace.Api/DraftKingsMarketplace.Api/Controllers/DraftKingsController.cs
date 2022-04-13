using System.Threading.Tasks;
using DraftKingsMarketplace.Api.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DraftKingsMarketplace.Api.Controllers
{
    [ApiController]
    [Route("api/marketplace")]
    [AllowAnonymous]
    public class DraftKingsController : ControllerBase
    {
        private readonly IMediator _mediator;

        private readonly ILogger<DraftKingsController> _logger;

        public DraftKingsController(
            ILogger<DraftKingsController> logger,
            IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }

        [HttpGet]
        [Route("drops")]
        public async Task<ActionResult> GetDrops()
        {
            var drops = await _mediator.Send(new CollectibleDropsQuery());

            return Ok(drops);
        }
    }
}
