using System;
using System.Collections.Generic;
using System.Linq;
using DraftKingsMarketplace.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DraftKingsMarketplace.Api.Controllers
{
    [ApiController]
    [Route("v1")]
    public class DraftKingsController : ControllerBase
    {
        private readonly ILogger<DraftKingsController> _logger;

        public DraftKingsController(ILogger<DraftKingsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<CollectibleDrop> Get()
        {
            return null;
        }
    }
}
