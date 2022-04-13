using DraftKingsMarketplace.Api.Models;
using MediatR;

namespace DraftKingsMarketplace.Api.Queries
{
    public class BannerQuery : IRequest<Banner>
    {
        public BannerQuery()
        {
        }
    }
}
