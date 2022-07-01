#!/bin/bash
set -e

# Safely create the database, then run all migrations and seeders
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
