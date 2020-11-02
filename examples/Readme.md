# Examples

This directory contains a few examples of using the TypeGraphQL Prisma 2 integration:

- **Prototyping** - the workflow of using the generator that creates TypeGraphQL artifacts from Prisma 2 schema and creating a GraphQL schema with all CRUD operation

  https://github.com/MichalLytek/typegraphql-prisma/tree/main/examples/1-prototyping

- **Basic** - demonstrating how you can create custom methods or custom fields

  https://github.com/MichalLytek/typegraphql-prisma/tree/main/examples/2-basic

- **Picking Actions** - demonstrating how you can choose certain Prisma actions to be exposed in the GraphQL schema

  https://github.com/MichalLytek/typegraphql-prisma/tree/main/examples/3-picking-actions

- **Nest JS** - showcase of combining `typegraphql-prisma` with `typegraphql-nestjs` to expose TypeGraphQL-Prisma2 artifacts as GraphQL schema using Nest JS

  https://github.com/MichalLytek/typegraphql-prisma/tree/main/examples/4-nest-js

To run some example, simply go to the subdirectory, install the dependencies (`npm i`) and then start the server (`npm start`).

Each subdirectory contains a `examples.gql` file with a predefined GraphQL queries that you can use in GraphQL Playground (http://localhost:4000) and play with them by modifying it's shape and data.
