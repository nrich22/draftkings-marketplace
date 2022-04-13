using System;
using System.Collections.Generic;
using DraftKingsMarketplace.Api.Queries;
using DraftKingsMarketplace.Api.Models;
using MediatR;
using System.Threading.Tasks;
using System.Threading;
using System.Linq;

namespace DraftKingsMarketplace.Api.QueryHandlers
{
    public class CollectibleDropsQueryHandler : IRequestHandler<CollectibleDropsQuery, List<CollectibleDrop>>
    {
        private readonly DraftKingsDbContext _context;

        public CollectibleDropsQueryHandler(DraftKingsDbContext context)
        {
            _context = context;
        }

        public async Task<List<CollectibleDrop>> Handle(CollectibleDropsQuery request, CancellationToken cancellationToken)
        {
            try
            {
                var drops = await Task.FromResult(_context.Drops.ToList());
                return drops;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return null;
        }
    }
}
