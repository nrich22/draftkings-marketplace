using System;
using System.Collections.Generic;
using DraftKingsMarketplace.Api.Interfaces;
using DraftKingsMarketplace.Api.Queries;
using DraftKingsMarketplace.Api.Models;

namespace DraftKingsMarketplace.Api.QueryHandlers
{
    public class CollectibleDropsQueryHandler : IQueryHandler<CollectibleDropsQuery, IEnumerable<CollectibleDrop>>
    {
        public CollectibleDropsQueryHandler()
        {
        }

        public IEnumerable<CollectibleDrop> Handle(CollectibleDropsQuery query)
        {
            throw new NotImplementedException();
        }
    }
}
