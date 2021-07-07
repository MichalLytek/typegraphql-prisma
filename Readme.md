![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# TypeGraphQL & Prisma integration

Prisma generator to emit TypeGraphQL types and CRUD resolvers from your Prisma schema.

[**https://prisma.typegraphql.com/**](https://prisma.typegraphql.com/)

## Documentation

The documentation, installation guide, detailed description of the API and all of its features is [available on the website](https://prisma.typegraphql.com/).

## Examples

You can check out some usage examples on this repo:

https://github.com/MichalLytek/typegraphql-prisma/blob/main/examples/Readme.md

## Feedback

Currently released version `0.x` is just a preview of the upcoming integration. For now it lacks some customization option - picking models or fields of object types to expose in the schema, hiding input fields as well as picking exposed args fields. However, the base functionality is working well, so I strongly encourage you to give it a try and play with it.

Any feedback about the developers experience or ideas about new features or enhancements are very welcome - please feel free to put your two cents by using the [GitHub Discussions feature](https://github.com/MichalLytek/typegraphql-prisma/discussions/new):

<img src="https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/feedback.png" width="327"/>

## Future plans

In some far feature, when Prisma SDK will be ready, the `typegraphql-prisma` integration will also allow to use a code-first approach to build a `schema.prisma` and GraphQL schema at once, using classes with decorators as a single source of truth.

Stay tuned! :muscle:
