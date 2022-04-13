using System.ComponentModel.DataAnnotations;

namespace DraftKingsMarketplace.Api.Models
{
    public class Banner
    {
        [Key]
        public int Id { get; set; }

        public string Url { get; set; }

        public string DestinationUrl { get; set; }

        public bool OpenLinkInNewTab { get; set; }
    }
}
