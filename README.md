# Store Manager

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/IgorMarinhoArgollo/store-manager?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/IgorMarinhoArgollo/store-manager">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/IgorMarinhoArgollo/store-manager">
    
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   
<details>
  <summary><h2>:brazil: Português</h2></summary>
  O Store Manager Project foi desenvolvido com fins educacionais no módulo de Backend do Curso de Desenvolvimento Web Full Stack na Trybe. <br> Além da parcela do backend (desenvolvida em Node.js e ExpressJS com JavaScript) do gerenciador de loja, o projeto conta com um bando de dados relacionais desenvolvido com o MySQL e os testes utilizando: Mocha, Chai e Sinon.<br><br>
  
  ## Live Link
  <a href="https://talkermanager.herokuapp.com/api-docs/">Live/Documentação</a><br><br>
  
  ## Objetivos
  * Elaborar o Backend de um gerenciador de loja;
  * Implementar uma rota de Vendas, uma de produtos e outra com a documentação;
  * Implementar as rotas com consultas ao banco de dados elaborado com MySQL;
  * Adotar boas práticas do ponto de vista de segurança usando: Helmet, Rate-Limit e DotEnv;
  * Utilizar o Swagger para criar a documentação;
  * Elaborar testes cobrindo, a princípio, 100% da aplicação (outros testes ainda serão desenvolvidos para melhorar ainda mais a aplicação web);
  * Configuração de arquivos Docker para rodar o software.<br><br>
  
  ## Tecnologias usadas
  * node.js
  * Express Js
  * Arquitetura MSC - Model, Service, Controller
  * Husky
  * Commitizen
  * ESLint
  * Docker
  * Helmet
  * Rate-Limit
  * Morgan
  * Swagger
  * Rescue
  * Nyc
  * Mocha
  * Chai
  * Sinon
  * DotEnv<br><br>

      
  ## Como Rodar
      
  ### Clonar no seu computador (via SSH)
  No terminal:
  
    git clone git@github.com:IgorMarinhoArgollo/store-manager.git
    
  ### Crie o arquivo .env na pasta store-manager
  Chaves que devem ser inseridas:
  ```
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=12345678
    MYSQL_DATABASE=StoreManager
    PORT=3000
  ``` 

  ### Rodar Localmente
  #### Requisitos:
   * node.js
   * MySQL
  
  #### Iniciando criando e populando o banco
  No terminal:
  
    npm run migration
    npm run seed
  
  
  #### Iniciando o projeto localmente
  No terminal:
  
    npm run dev
          
      
  ### Rodar no Container
  #### Requisitos:
   * Docker
   * Docker-compose
  
  #### Iniciando o projeto localmente
  no terminal:
  
    docker-compose up


  ## Rotas
  Vide detalhes na documentação disponível na rota: 
  
  * GET /api-docs
  ------------------------
  * GET /products
  * GET /products/search?q=
  * GET /products/:id
  * POST /products
  * PUT /products/:id
  * DELETE /products/:id
  * GET /sales
  * GET /sales/:id
  * POST /sales
  * PUT /sales/:id
  * DELETE /sales/:id
  
    
  ## Como contribuir no projeto
  1. Faça um **fork** do projeto;
  2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`;
  3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`;
  4. Envie as suas alterações: `git push origin my-feature`;
  5. Abra o seu pull-request na página do GitHub.<br><br>

  ##  Autor
<a href="https://www.linkedin.com/in/igormarinhoargollo/">
 <img style="border-radius:300px;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Marinho Argollo</b></sub></a> <a href="https://www.linkedin.com/in/igormarinhoargollo/"></a>
 <br><br>

  ## Licença
  Esse projeto está sob a licença:
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>
</details>
  
  ##  
  ## :us: English
  The Store Manager Project was developed for educational purposes in the Backend module of the Full Stack Web Development Course at Trybe. <br> In addition to the backend portion (developed in Node.js and ExpressJS with JavaScript) of the store manager, the project has a relational database developed with MySQL and tests developed with: Mocha, Chai and Sinon.<br><br>

## Live Link
<a href="https://talkermanager.herokuapp.com/api-docs/">Live/Documents</a><br><br>
  
## My Goals
* Develop the Backend of a store manager;
* Implement routes: sales, products and documentation;
* Implement the routes with queries to the MySQL database;
* Adopt best practices from a security point of view using: Helmet, Rate-Limit and DotEnv;
* Use Swagger to create documentation;
* Develop tests covering, in principle, 100% of the application (other tests will still be developed to further improve the web application);
* Configuration of Docker files and docker-compose to run the software.<br><br>

## Used Technologies
* node.js
* Express Js
* Arquitetura MSC - Model, Service, Controller
* Husky
* Commitizen
* ESLint
* Docker
* Helmet
* Rate-Limit
* Morgan
* Swagger
* Rescue
* Nyc
* Mocha
* Chai
* Sinon
* DotEnv<br><br>

    
## How to Run
      
  ### Clone the repository on your computer (via SSH)
  On terminal:
  
    git clone git@github.com:IgorMarinhoArgollo/store-manager.git
    
  ### Create the .env file on store-manager file
  Keys that must be included:
  ```
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=12345678
    MYSQL_DATABASE=StoreManager
    PORT=3000
  ``` 
  ### Running Locally
  #### Requirements:
   * node.js
   * MySQL
  
  #### Stasting and population database
  On terminal:
  
    npm run migration
    npm run seed
  
  #### Starting the project locally
  On terminal:
  
    npm run dev
      
      
  ### Running on Container
  #### Requirements:
   * Docker
   * Docker-compose
  
  #### Starting the project on Docker
  On terminal:
  
    docker-compose up


## Routes
  See more details on documentation available on route: 
  
  * GET /api-docs
  ------------------------
  * GET /products
  * GET /products/search?q=
  * GET /products/:id
  * POST /products
  * PUT /products/:id
  * DELETE /products/:id
  * GET /sales
  * GET /sales/:id
  * POST /sales
  * PUT /sales/:id
  * DELETE /sales/:id
  
  
## How to contribute on the project
  1. Make a **fork** of the project;
  2. Create a new branch with your changes: `git checkout -b my-feature`;
  3. Save your changes and create a commit message explaining what you have done: `git commit -m "feature: My new feature"`;
  4. Send your changes: `git push origin my-feature`;
  5. Open your pull-request on GitHub.<br><br>

##  Author
<a href="https://www.linkedin.com/in/igormarinhoargollo/">
 <img style="border-radius:300px;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Marinho Argollo</b></sub></a> <a href="https://www.linkedin.com/in/igormarinhoargollo/"></a>
 <br />
  
## License
  This project is under license:
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>
