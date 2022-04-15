CREATE PROCEDURE [dbo].[GetDropById]
    @DropId int
AS
BEGIN

    SET NOCOUNT ON;

    SELECT * 
    FROM [dbo].[Drops]
    WHERE Id = @DropId
END