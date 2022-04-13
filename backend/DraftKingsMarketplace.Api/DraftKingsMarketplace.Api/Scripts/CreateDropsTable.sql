﻿IF NOT EXISTS (SELECT * FROM sysobjects WHERE NAME='DROPS' AND xtype='U')
BEGIN

    CREATE TABLE Drops (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        SalePrice DECIMAL NOT NULL,
        SaleCurrencyCode VARCHAR(5),
        RemainingQuantity INT,
        WaitingRoomKey VARCHAR(255),
        PrimaryPurchaseStatus VARCHAR(20),
        DropItemInfoTitle VARCHAR(255),
        DropDate DATETIME,
        HasPreferredAccess BIT,
        DropItemDescription VARCHAR(255),
        DropItemDescriptionLink VARCHAR(255),
        PreferredAccessStartTime DATETIME,
        PreferredAccessEndTime DATETIME,
        PreferredAccessPrice DECIMAL,
        MerchandiseType VARCHAR(255),
        VisibleDate DATETIME,
        CollectibleKey VARCHAR(255),
        Name VARCHAR(255),
        Description VARCHAR(1500),
        PartnerName VARCHAR(255),
        TotalQuantity INT,
        CollectionName VARCHAR(255),
        ContractAddress VARCHAR(255),
        BlockchainName VARCHAR(255),
        ThumbnailUrl VARCHAR(255),
        ThumbnailType VARCHAR(255),
        ThumbnailMediaType VARCHAR(255),
        PreviewUrl VARCHAR(255),
        PreviewType VARCHAR(255),
        PreviewMediaType VARCHAR(255),
        AssetUrl VARCHAR(255),
        AssetType VARCHAR(255),
        AssetMediaType VARCHAR(255),
        PartnerAssetUrl VARCHAR(255),
        SupplierTermsOfServiceUrl VARCHAR(255),
        RoyaltyFeeRate VARCHAR(255),
        RarityCallout VARCHAR(255),
        TransactionFeeRate DECIMAL,
        IsTransferrable BIT
    )

    INSERT INTO Drops (
        SalePrice,
        SaleCurrencyCode,
        RemainingQuantity,
        PrimaryPurchaseStatus,
        DropItemInfoTitle,
        DropDate,
        HasPreferredAccess,
        DropItemDescription,
        DropItemDescriptionLink,
        MerchandiseType,
        VisibleDate,
        CollectibleKey,
        Name,
        Description,
        PartnerName,
        TotalQuantity,
        CollectionName,
        ContractAddress,
        BlockchainName,
        ThumbnailUrl,
        ThumbnailType,
        ThumbnailMediaType,
        PreviewUrl,
        PreviewType,
        PreviewMediaType,
        AssetUrl,
        AssetType,
        AssetMediaType,
        SupplierTermsOfServiceUrl,
        RoyaltyFeeRate,
        TransactionFeeRate,
        IsTransferrable
    ) VALUES (
        50.00,
        'USD',
        906,
        'Enabled',
        'Purchase Limit Has Increased!',
        '2022-04-01 20:00:57',
        0,
        'Individual users can now purchase a maximum of up to 10 editions.',
        'https://marketplace.draftkings.com/lp/2022-college-hoops-nft-collection',
        'Collectible',
        '2022-03-30 17:00:57',
        '0a9a17d78bec49c2ad4628eca0570306',
        'Common TourneyToons: Cuttin Down Nets',
        'The Common TourneyToons: Cuttin Down Nets collectible is an official DraftKings NFT as a part of the 2022 College Hoops Tournament Collection. This NFT represents one of 2,022 editions. The 2022 College Hoops Collection is the first of many official NFT collections created by DraftKings as part of our new program, the DraftKings Primetime NFT Series. This series will celebrate the biggest moments in sports and will feature NFT drops during primetime events to engage fans like never before. Get rewarded for each collection and experience these major sports moments throughout the year. This collection was created to commemorate the 2022 College Hoops Tournament and will feature several collectible drops throughout the tourney. Gain access to exclusive DK rewards the more you collect, and priority access to a future collection drop in the DraftKings Primetime NFT series for completing the collection. All purchases are subject to DraftKings Terms & Conditions (https://myaccount.draftkings.com/documents/us-mkt-terms-of-use).',
        'DraftKings',
        2022,
        '2022 College Hoops Collection',
        '0xec5f4ea1f761f507a616e4c6226084ab2f32d218',
        'Polygon',
        'https://marketplace.draftkings.com/_assets/collectibles/assets/88bdbf63-7390-4545-a3fa-8ac80b0a5d62.png',
        'Image',
        'image/png',
        'https://marketplace.draftkings.com/_assets/collectibles/assets/b4ef0be7-a344-46d3-9433-fa5cdec2f97a.png',
        'Image',
        'image/png',
        'https://marketplace.draftkings.com/_assets/collectibles/assets/b6aa153a-b8fa-4022-8f69-a46375a65816.png',
        'Image',
        'image/png',
        'https://myaccount.draftkings.com/documents/us-mkt-terms-of-use',
        0.0000,
        0.0500,
        0
    );

END