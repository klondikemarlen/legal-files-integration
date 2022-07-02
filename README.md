# Legal Files Integration

A project that links the Community Services "Yukon.ca" Drupal webforms front-end
to a database operated by a company called LegalFiles.

The project is a Node/Express server running in Docker Compose. It has an
endpoint to accept data from a Drupal form. This calls a controller that
performs some data transforms, then sends the transformed data to the LegalFiles
database. See the
[Legal Files Integration Design](https://docs.google.com/document/d/1O40PVvLg3mR5D4rOay5NqxiXw3o1OdjrwO-JDWRD0oE)
document.

## Repository Layout

### Core files and folders

- [server.js](server.js) - app entrypoint
- [bin/entrypoint.sh](bin/entrypoint.sh) - runs database setup and migration and
  seeding on app boot.
- [bin/dev](bin/dev) - `dev` helper command for working with Docker Compose.
- [Design](Design) - entity relationship modeling and documentation for external
  contractors.

### Source folder layout

- [src/](src/) - Express server source code
- [src/api/](src/api/) - (future) code for talking to the LegalFiles API.
- [src/controllers/](src/controllers/) - code to receive Drupal form data and
  pass it off to a service. Controllers should limit themselves to calling
  services and returning a response to the Drupal form.
- [src/db/](src/db/) - Sequelize database migrations, seeders, and config.
- [src/db/migrations/](src/db/migrations/) - Sequelize database migration files.
- [src/db/seeders/](src/db/seeders/) - Sequelize database seeding files.
- [src/db/config.js](src/db/config.js) - Sequelize config file for database
  connections.
- [src/models/](src/models/) - Sequelize database models.
- [src/processors/](src/processors/) - Models and lambdas for raw data to
  mapping model attributes.
- [src/services/](src/services/) - code to transform Drupal form data and call
  API functions. Services should be thoroughly tested as the bulk of the
  application logic occurs in them.
- [src/utils/](src/utils/) - Small helper functions.
- [src/app.js](src/app.js) - core app logic
- [src/models.js](src/models.js) - Logic for loading the Sequelize database and
  all models.
- [src/routes.js](src/routes.js) - routes that accept form data. Routes are
  mapped to controller methods.

### Production

- [docker-compose.yaml](docker-compose.yaml) - production Docker Compose
  configuration
- [Dockerfile](Dockerfile) - production Dockerfile
- dist/server-bundle.js - production server bundle, only available in container
  after production build.
- .env - production environment config, _never_ commit this file.

### Development

- [docker-compose.development.yaml](docker-compose.development.yaml) -
  development Docker Compose configuration
- [development.Dockerfile](development.Dockerfile) - development Dockerfile
- .env.development - development environment config, _never_ commit this file.
- [nodemon.config.json](nodemon.config.json) - Nodemon config for developement
  code reloading.
- [babel.config.json](babel.config.json) - Babel config for JS enhancemens and
  compatability
- [.prettierrc.yaml](.prettierrc.yaml) - Prettier config for code
  auto-formatting.
- [.eslintrc.json](.eslintrc.json) - Eslint config for code quality and linting.
- [.sequelizerc](.sequelizerc) - sequelize-cli config file for migrations and
  seeds

#### Test

- [.mocharc.js](.mocharc.js) - mocha configuration file
- [tests/](tests/) - test folder, test files must follow the format
  `tests/**/*.test.js` plugins
- [tests/test-setup.js](tests/test-setup.js) - test setup file, loads Chai and
  various other test
- [tests/helpers.js](tests/helpers.js) - test helpers. e.g. for loading test
  data from json
- [tests/hooks.js](tests/hooks.js) - global test hooks. e.g. for cleaning the
  database before each test

## Development Setup

1. To develop the app, clone the repository to a local folder via

```bash
git clone git@github.com:klondikemarlen/legal-files-integration.git
```

> Assumes that you are running on a system that supports bash

2. Set up a minimal development environment by installing the following:

   - [Docker](https://docs.docker.com/engine/install/)
   - [Docker Compose](https://docs.docker.com/compose/install/)

3. (optional) Install
   [Ruby](https://www.ruby-lang.org/en/documentation/installation/)

> If you choose not to install Ruby you can replace the `dev` command below with
> `docker compose -f docker-compose.development.yaml`

4. (optional) Install [direnv](https://direnv.net/) then change to the
   `legal-files-integration` directory and make a basic `.envrc` file like so:

```bash
#!/usr/bin/env bash

PATH_add bin
```

Then run `direnv allow`

> If you choose not to install `direnv`, you can replace `dev` in the following
> commands with `bin/dev`

5. Create a `.env.development` file in the top-level project directory from the
   `env.template` file.
6. Build the app via `dev build`; depending on your internet speed, this may
   take a while.

7. Boot the app via `dev up`, wait for it to boot, and then go to the
   [http://localhost:3000/](http://localhost:3000/).

### Migrations

Using Sequelize, see https://sequelize.org/docs/v6/other-topics/migrations/

Inside container the "app" container - `dev bash`.

1. `npx sequelize-cli db:create`
2. `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`
3. `npx sequelize-cli db:migrate`

To undo a migration:

- `npx sequelize-cli db:migrate:undo`

To create and run seeds:

- `npx sequelize-cli seed:generate --name demo-user`
- `npx sequelize-cli db:seed:all`

> If you are on Linux, you will need to take ownership of the files after
> creating them inside a docker container. Run
> `sudo chown -R $UID:$(id -g) <file-or-directory>` outside of the container.
> The following helper will make your life much easier:

```bash
ownit () {
    local file_or_directory="${1:-.}"
    echo "Take ownership of the file or directory? ${file_or_directory}"
    sudo chown -R $UID:$(id -g) "$file_or_directory"
}
```

### Testing

1. Build the development setup via `dev build` or
   `docker compose -f docker-compose.development.yaml build`
2. Run the test environment via `dev mocha` or `dev test` or
   `docker compose -f docker-compose.development.yaml run --rm test npm run test`

### Production Image Testing

1. Spin up an example production database using
   `docker run --rm -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=1m5ecure!" -p 1433:1433 mcr.microsoft.com/mssql/server:2022-latest`

   > Note that the password must match the DB_PASSWORD in the `.env` file.

2. Build production build using `docker compose build`.
3. Start the production server using `docker compose up`

> Debug the built image via `docker compose run --rm app bash`

## Production Deployment (not currently working)

5. Create a `.env` file in the top-level project directory from the
   `env.template` file.
1. Build the app via `docker compose build`.
1. Deploy the build app via `docker compose up`
