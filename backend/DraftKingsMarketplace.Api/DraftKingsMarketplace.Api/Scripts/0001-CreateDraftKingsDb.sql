USE master
GO
IF NOT EXISTS (SELECT [name] FROM sys.databases WHERE [name] = N'DraftKings')
    CREATE DATABASE DraftKings
GO