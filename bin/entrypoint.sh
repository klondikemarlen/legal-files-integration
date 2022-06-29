#!/bin/bash
set -e

# Run all migrations
npx sequelize-cli db:create
npx sequelize-cli db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
