#!/bin/bash

echo "Testing TypeGraphQL-Prisma Generator with Prisma 7..."
echo ""

# Clean up previous test
rm -rf temp/test-generator/generated

# Navigate to test directory
cd temp/test-generator

# Run generator
echo "Running: DATABASE_URL='file:./dev.db' npx prisma generate"
DATABASE_URL="file:./dev.db" npx prisma generate

# Check results
if [ -d "generated/type-graphql" ]; then
  echo ""
  echo "✅ Generator completed successfully!"
  echo ""
  echo "Generated files:"
  find generated/type-graphql -type f -name "*.ts" | wc -l | xargs echo "  Total TypeScript files:"
  echo "  Models: $(ls -1 generated/type-graphql/models/*.ts 2>/dev/null | grep -v index.ts | wc -l)"
  echo "  Enums: $(ls -1 generated/type-graphql/enums/*.ts 2>/dev/null | grep -v index.ts | wc -l)"
  echo "  CRUD Resolvers: $(find generated/type-graphql/resolvers/crud -type d -depth 1 2>/dev/null | wc -l)"
  echo ""
  echo "Output location: $(pwd)/generated/type-graphql"
else
  echo "❌ Generator failed!"
  exit 1
fi
