CREATE PROCEDURE [dbo].[GetMostRecentBanner]
AS
BEGIN

    SET NOCOUNT ON;

    SELECT TOP 1 *
    FROM [dbo].[Banners]
    ORDER BY Id DESC 
END