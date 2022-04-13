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
* View Drops and Polygon Blockchain Token via Polyscan
* View Drop NFT
* Toggle Between Light and Dark Mode

### Clone the repo

```shell
git clone https://github.com/nrich22/draftkings-marketplace.git
cd draftkings-marketplace
```

### Create SQL Server Database using SQL Sever Management (Windows)

If you are on Windows it will be easier to use Microsft SQL Sever Management Studio. Create a local instance and execute the db scripts located in draftkings-marketplace/backend/DraftKingsMarketplace.Api/DraftKingsMarketplace.Api/Scripts in order to create the database and tables.

### Create SQL Server Database using Docker (Mac)

Make sure docker cli is installed.
Create sql_server container with following command:

```shell
docker run -d --name sql_server -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=someThingComplicated1234' -p 1433:1433 mcr.microsoft.com/mssql/server:2019-latest
```

Connect to sql server instance container using sql cli, Azure Data Studio or Visual Studio Code. (I use Visual Studio Code.)

To use sql cli run the following commands:

```shell
npm install -g sql-cli
mssql -u sa -p someThingComplicated1234
```

Execute scripts located in draftkings-marketplace/backend/DraftKingsMarketplace.Api/DraftKingsMarketplace.Api/Scripts in order to create the database and tables.

### Run .NET API Project

Make sure db instance is running.

Open draftkings-marketplace/backend/DraftKingsMarketplace.Api/DraftKingsMarketplace.Api.sln in Visual Studio and Set DraftKingsMarketplace.Api as Start Up Project. Run Project in Visual Studio and wait for
new browser tab to open to https://localhost:5001/api/marketplace.

View swagger.jsonp openapi: https://localhost:5001/swagger/v1/swagger.json


### Run Frontend Angular Project

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
cd frontend
npm install
npm start
```

### UI Dark Mode

Drops Home Page

![Screen Shot 2022-04-13 at 5 07 41 PM](https://user-images.githubusercontent.com/15204516/163270830-0f7cb605-6787-4142-b4e9-bbef3e6359a9.png)
![Screen Shot 2022-04-13 at 5 23 39 PM](https://user-images.githubusercontent.com/15204516/163272883-54260a06-77f5-42e7-b2e5-869074326a71.png)
View Drop

![Screen Shot 2022-04-13 at 5 07 52 PM](https://user-images.githubusercontent.com/15204516/163270912-ba658bda-25ae-43a7-86f8-0df79ecc9673.png)
Mobile

![Screen Shot 2022-04-13 at 5 32 35 PM](https://user-images.githubusercontent.com/15204516/163274128-4142b697-2b87-4a2a-9309-1a24f0b48725.png)
![Screen Shot 2022-04-13 at 5 42 01 PM](https://user-images.githubusercontent.com/15204516/163275220-f51f64fe-35d1-4fde-b07e-7534f8d55ef8.png)

### UI Light Mode

Drops Home Page

![Screen Shot 2022-04-13 at 5 06 58 PM](https://user-images.githubusercontent.com/15204516/163270700-c1b18b2c-38bf-473e-a8af-e96904c58588.png)
![Screen Shot 2022-04-13 at 5 07 29 PM](https://user-images.githubusercontent.com/15204516/163270804-afd99f89-475e-4f2b-9604-f01765d88b46.png)
View Drop

![Screen Shot 2022-04-13 at 5 23 03 PM](https://user-images.githubusercontent.com/15204516/163272792-1755cc16-7c89-4af6-b754-3307f6aa34a9.png)
Mobile

![Screen Shot 2022-04-13 at 5 32 42 PM](https://user-images.githubusercontent.com/15204516/163274195-ee2eccf3-9d46-4279-b65f-80f4d162681b.png)
![Screen Shot 2022-04-13 at 5 41 21 PM](https://user-images.githubusercontent.com/15204516/163275155-83654b8b-64a8-42f3-8b0d-9958d9dcb6da.png)


