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
    public class CollectibleDropQueryHandler : IRequestHandler<CollectibleDropQuery, CollectibleDrop>
    {
        private readonly DraftKingsDbContext _context;

        public CollectibleDropQueryHandler(DraftKingsDbContext context)
        {
            _context = context;
        }

        public async Task<CollectibleDrop> Handle(CollectibleDropQuery request, CancellationToken cancellationToken)
        {
            try
            {
                // Get all drops from the db
                var drops = await Task.FromResult(_context.Drops.Where(drop => drop.Id == request.Id).FirstOrDefault());
                return drops;
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: " + e.Message);
            }

            return null;
        }
    }
}
