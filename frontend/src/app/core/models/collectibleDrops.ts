export interface CollectibleDrop {
    id: number;
    salePrice: number;
    saleCurrencyCode: string;
    remainingQuantity: number;
    waitingRoomKey?: string;
    primaryPurchaseStatus: string;
    dropItemInfoTitle?: string;
    dropDate: string;
    hasPreferredAccess: boolean;
    dropItemDescription?: string;
    dropItemDescriptionLink: string;
    preferredAccessStartTime?: string;
    preferredAccessEndTime?: string;
    preferredAccessPrice?: number;
    merchandiseType: string;
    visibleDate: string;
    collectibleKey: string;
    name: string;
    description: string;
    partnerName: string;
    totalQuantity: number;
    collectionName: string;
    contractAddress: string;
    blockchainName: string;
    thumbnailUrl: string;
    thumbnailType: string;
    thumbnailMediaType: string;
    previewUrl: string;
    previewType: string;
    previewMediaType: string;
    assetUrl: string;
    assetType: string;
    assetMediaType: string;
    partnerAssetUrl?: string;
    supplierTermsOfServiceUrl: string;
    royaltyFeeRate: number;
    rarityCallout?: string;
    transactionFeeRate: number;
    isTransferrable: boolean;
 }
