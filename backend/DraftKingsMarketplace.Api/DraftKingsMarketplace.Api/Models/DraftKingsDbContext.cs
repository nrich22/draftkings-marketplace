using Microsoft.EntityFrameworkCore;

namespace DraftKingsMarketplace.Api.Models
{
	public class DraftKingsDbContext : DbContext
	{
		public DbSet<CollectibleDrop> Drops { get; set; }

		public DbSet<Banner> Banners { get; set; }

		public DraftKingsDbContext(DbContextOptions<DraftKingsDbContext> options) : base(options)
		{ }
	}
}
