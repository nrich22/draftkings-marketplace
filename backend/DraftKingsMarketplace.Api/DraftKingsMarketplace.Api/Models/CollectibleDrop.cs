using System;
using System.ComponentModel.DataAnnotations;

namespace DraftKingsMarketplace.Api.Models
{
    public class CollectibleDrop
    {
        [Key]
        public int Id { get; set; }

        public decimal? SalePrice { get; set; }

        public string SaleCurrencyCode { get; set; }

        public int RemainingQuantity { get; set; }

        public string WaitingRoomKey { get; set; }

        public string DropItemInfoTitle { get; set; }

        public DateTime? DropDate { get; set; }

        public bool HasPreferredAccess { get; set; }

        public string DropItemDescription { get; set; }

        public string DropItemDescriptionLink { get; set; }

        public DateTime? PreferredAccessStartTime { get; set; }

        public DateTime? PreferredAccessEndTime { get; set; }

        public decimal? PreferredAccessPrice { get; set; }

        public string MerchandiseType { get; set; }

        public DateTime? VisibleDate { get; set; }

        public string CollectibleKey { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string PartnerName { get; set; }

        public int TotalQuantity { get; set; }

        public string CollectionName { get; set; }

        public string ContractAddress { get; set; }

        public string BlockchainName { get; set; }

        public string ThumbnailUrl { get; set; }

        public string ThumbnailType { get; set; }

        public string ThumbnailMediaType { get; set; }

        public string PreviewUrl { get; set; }

        public string PreviewType { get; set; }

        public string PreviewMediaType { get; set; }

        public string AssetUrl { get; set; }

        public string AssetType { get; set; }

        public string AssetMediaType { get; set; }

        public string PartnerAssetUrl { get; set; }

        public string SupplierTermsOfServiceUrl { get; set; }

        public decimal? RoyaltyFeeRate { get; set; }

        public string RarityCallout { get; set; }

        public decimal? TransactionFeeRate { get; set; }

        public bool IsTransferrable { get; set; }
    }
}
