using Microsoft.EntityFrameworkCore;

namespace DraftKingsMarketplace.Api.Models
{
	public class DraftKingsDbContext : DbContext
	{

		private readonly string ConnectionString;

		public DraftKingsDbContext(string connectionString)
		{
			ConnectionString = connectionString;
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(ConnectionString);
		}

		public DbSet<CollectibleDrop> Drops { get; set; }
	}
}
