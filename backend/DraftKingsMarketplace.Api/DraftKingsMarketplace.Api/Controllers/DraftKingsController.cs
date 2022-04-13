using System.Collections.Generic;
using DraftKingsMarketplace.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DraftKingsMarketplace.Api.Controllers
{
    [ApiController]
    [Route("marketplace")]
    [Authorize]
    public class DraftKingsController : ControllerBase
    {
        private readonly ILogger<DraftKingsController> _logger;

        public DraftKingsController(ILogger<DraftKingsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("drops")]
        public IEnumerable<CollectibleDrop> Get()
        {
            return null;
        }
    }
}
