using DraftKingsMarketplace.Api.Models;
using MediatR;

namespace DraftKingsMarketplace.Api.Queries
{
    public class CollectibleDropQuery : IRequest<CollectibleDrop>
    {
        public int Id { get; set; }

        public CollectibleDropQuery(int dropId)
        {
            Id = dropId;
        }
    }
}
