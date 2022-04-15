IF NOT EXISTS (SELECT * FROM sysobjects WHERE NAME='Banner' AND xtype='U')
BEGIN

    CREATE TABLE Banners (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        Url VARCHAR(1000),
        DestinationUrl VARCHAR(1000),
        OpenLinkInNewTab BIT
    )

    INSERT INTO Banners (
        Url,
        DestinationUrl,
        OpenLinkInNewTab
    ) VALUES (
        'https://marketplace.draftkings.com/_assets/banners/images/294d19ba-7404-443f-a77e-ff539f51d4cd.gif',
        'https://marketplace.draftkings.com/lp/22-augusta-ga-golf-nft-collection',
        1
    )

END