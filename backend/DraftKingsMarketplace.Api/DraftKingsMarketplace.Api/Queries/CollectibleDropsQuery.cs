using System.Collections.Generic;
using DraftKingsMarketplace.Api.Models;
using MediatR;

namespace DraftKingsMarketplace.Api.Queries
{
    public class CollectibleDropsQuery : IRequest<List<CollectibleDrop>>
    {
        public CollectibleDropsQuery()
        {
        }
    }
}
