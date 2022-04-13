# draftkings-marketplace
DraftKings Marketplace Demo Project

## Get started

Technologies used in this full-stack web application (Pre-reqs):
* Developed on Mac M1 Pro (Do not need to use docker on Windows)
* Angular version 13.1.3
* ASP.NET Core Web API 3.1
* Docker version 20.10.11
* SQL Server

Features and Design:
* Responsive Design for Mobile Web
* Navigate to DK Account, DK Shop and DK Contact
* View Drops
* View Drop NFT
* Toggle Between Light and Dark Mode

### Clone the repo

```shell
git clone https://github.com/nrich22/draftkings-marketplace.git
cd draftkings-marketplace
```

### Create SQL Server Database using SQL Sever Management (Windows)

If you are on Windows it will be easier to use Microsft SQL Sever Management Studio. Create an instance and execute the db scripts located in draftkings-marketplace/backend/DraftKingsMarketplace.Api/DraftKingsMarketplace.Api/Scripts in order to create the database and tables.

### Create SQL Server Database using Docker (Mac)

Make sure docker cli is installed.
Create sql_server container with following command:

```shell
docker run -d --name sql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=someThingComplicated1234' -p 1433:1433 mcr.microsoft.com/mssql/server:2019-latest
```

Connect to sql server container using sql cli, Microsoft SQL Sever, Azure Data Studio or Visual Studio Code.

To use sql cli run the following commands:

```shell
npm install -g sql-cli
mssql -u sa -p someThingComplicated1234
```

Execute scripts located in draftkings-marketplace/backend/DraftKingsMarketplace.Api/DraftKingsMarketplace.Api/Scripts in order to create the database and tables.

### Run .NET API Project

Open draftkings-marketplace/backend/DraftKingsMarketplace.Api/DraftKingsMarketplace.Api.sln in Visual Studio and Set DraftKingsMarketplace.Api as Start Up Project. Run Project in Visual Studio and wait for
new browser tab to open to https://localhost:5001/api/marketplace.


### Run Frontend Angular Project

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
cd frontend
npm install
npm start
```