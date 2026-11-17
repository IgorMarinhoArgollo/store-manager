# Store Manager API

![Last commit](https://img.shields.io/github/last-commit/IgorMarinhoArgollo/store-manager)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

🇧🇷 [Leia em português](./README.pt-br.md)

REST API for a store management system: products and sales, backed by **MySQL**, documented with **Swagger**, covered by automated tests and runnable with **Docker**. Built to solidify backend fundamentals during Trybe's Full Stack Web Development course.

![Test coverage](./assets/cobertura.png)

## Features

- CRUD for **products** and **sales**, plus product search by name
- Layered architecture: **Model → Service → Controller**, written in a functional style
- Relational database (MySQL) with migration and seed scripts
- Interactive API documentation with Swagger at `/api-docs`
- Security basics: Helmet, rate limiting, centralized error handling and environment variables
- Unit tests for every layer (models, services, controllers) with Mocha, Chai, Sinon and nyc, aiming at full coverage
- Docker and Docker Compose setup, Husky and ESLint for code quality

## Tech stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)

Also: Chai, Sinon, nyc, Helmet, express-rate-limit, express-rescue and dotenv.

## Running locally

Clone the repository and create a `.env` file in the project root.

```bash
git clone https://github.com/IgorMarinhoArgollo/store-manager.git
cd store-manager
```

### Option 1: Docker (recommended)

Requirements: Docker and Docker Compose.

```env
MYSQL_HOST=db
MYSQL_USER=admin
MYSQL_PASSWORD=123
MYSQL_DATABASE=StoreManager
PORT=3000
DB_PORT=3308
```

```bash
docker-compose up
```

When the terminal shows the message below, the containers are ready:

![Containers ready](./assets/w8till.png)

### Option 2: Node.js and a local MySQL

Requirements: Node.js and MySQL.

```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=12345678
MYSQL_DATABASE=StoreManager
PORT=3000
```

```bash
npm install
npm run migration   # creates the database
npm run seed        # populates it
npm run dev         # starts the API
```

Open the Swagger docs at <http://localhost:3000/api-docs>.

## API

| Method | Route | Description |
|---|---|---|
| GET | `/products` | Lists all products |
| GET | `/products/:id` | Gets a product |
| GET | `/products/search?q=` | Searches products by name |
| POST | `/products` | Creates a product |
| PUT | `/products/:id` | Updates a product |
| DELETE | `/products/:id` | Deletes a product |
| GET | `/sales` | Lists all sales |
| GET | `/sales/:id` | Gets a sale |
| POST | `/sales` | Creates a sale |
| PUT | `/sales/:id` | Updates a sale |
| DELETE | `/sales/:id` | Deletes a sale |

<details>
<summary>Request examples (screenshots)</summary>

**Products**

![GET /products](./assets/getAllProducts.png)
![GET /products/:id](./assets/getProductById.png)
![POST /products](./assets/createProduct.png)
![GET /products/search](./assets/getProductByName.png)
![PUT /products/:id](./assets/updateProduct.png)
![DELETE /products/:id](./assets/deleteProduct.png)

**Sales**

![GET /sales](./assets/getAllSales.png)
![GET /sales/:id](./assets/getSalesById.png)
![POST /sales](./assets/createSale.png)
![PUT /sales/:id](./assets/updateSales.png)
![DELETE /sales/:id](./assets/deleteSales.png)

</details>

## Tests

```bash
npm test
```

The test suite mirrors the architecture, with one folder each for models, services and controllers under `tests/`.

## Author

**Igor Marinho Argollo** · [LinkedIn](https://www.linkedin.com/in/igormarinhoargollo/) · [Portfolio](https://igor-marinho.netlify.app/)

## License

MIT
