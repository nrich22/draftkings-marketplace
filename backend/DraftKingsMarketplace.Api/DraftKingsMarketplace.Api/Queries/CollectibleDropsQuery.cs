using System.Collections.Generic;
using DraftKingsMarketplace.Api.Interfaces;
using DraftKingsMarketplace.Api.Models;

namespace DraftKingsMarketplace.Api.Queries
{
    public class CollectibleDropsQuery : IQuery<IEnumerable<CollectibleDrop>>
    {
        public CollectibleDropsQuery()
        {
        }
    }
}
