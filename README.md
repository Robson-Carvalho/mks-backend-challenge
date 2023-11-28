<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
<a><img src="https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white"></a>
<a><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /></a>
<a><img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" /></a>
<a><img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" /></a>
<a><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
" /></a>
<a><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /></a>
<a><img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" /></a>
</p>

## Description

Requisíto como desafio técnico. Desenvolver um sistema de autenticação JWT, com CRUD de catálogo de filmes, onde todos os endpoints dessa CRUD só devem ser consumidos por um usuário autenticado

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app with Docker

```bash
# generate project docker image
$ docker compose build
# run nestjs project and database
$ docker compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Tecnologias Utilizadas

- TypeScript: Linguagem de programação usada para desenvolver o projeto, proporcionando tipagem estática e suporte moderno para JavaScript.
- Nest.js: Um framework Node.js progressivo para construir aplicativos eficientes e escaláveis.
- TypeORM: Um ORM (Object-Relational Mapping) que simplifica a interação com bancos de dados relacionais, neste caso, PostgreSQL.
- Swagger: Ferramenta para documentação automática da API, facilitando a compreensão e teste dos endpoints.
- Docker: Plataforma que permite a criação, teste e implementação de aplicativos em contêineres.
- PostgreSQL: Banco de dados relacional usado para armazenar dados permanentes do catálogo de filmes.

## Endpoints

### Auth

- POST /auth/login: Autentica o usuário e retorna um token JWT.

### Movies

- GET /api/v1/movies: Obtém a lista de filmes.
- GET /api/v1/movies/:id: Obtém detalhes de um filme por ID.
- POST /api/v1/movies: Adiciona um novo filme.
- PUT /api/v1/movies/:id: Atualiza os detalhes de um filme existente.
- DELETE /api/v1//movies/:id: Exclui um filme existente.

### Users

- GET /api/v1/users: Obtém a lista de usuários.
- GET /api/v1/users/:id: Obtém detalhes de um usuário por ID.
- POST /api/v1/users: Adiciona um novo usuário.
- PUT /api/v1/users/:id: Atualiza os detalhes de um usuário existente.
- DELETE /api/v1/users/:id: Exclui um usuário existente.

## Experiência com Tecnologias

- TypeScript: [1 ano]
- Nest.js: [1 mês]
- TypeORM: [6 meses]
- Swagger: [6 meses]
- Docker: [3 meses]
- PostgreSQL: [1 ano]
- Redis: [0 meses]

## Documentação

Documentação swagger. https://mks-backend-challenge-production.up.railway.app/api/v1/swagger/#

## Autor

- [@Robson-Carvalho](https://github.com/Robson-Carvalho).

## License

- [MIT licensed](LICENSE).
