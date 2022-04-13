using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using DraftKingsMarketplace.Api.Models;
using DraftKingsMarketplace.Api.Queries;
using MediatR;

namespace DraftKingsMarketplace.Api.QueryHandlers
{
    public class BannerQueryHandler : IRequestHandler<BannerQuery, Banner>
    {
        private readonly DraftKingsDbContext _context;

        public BannerQueryHandler(DraftKingsDbContext context)
        {
            _context = context;
        }

        public async Task<Banner> Handle(BannerQuery request, CancellationToken cancellationToken)
        {
            try
            {
                var banner = await Task.FromResult(_context.Banners.OrderByDescending(banner => banner.Id).FirstOrDefault());
                return banner;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return null;
        }
    }
}
