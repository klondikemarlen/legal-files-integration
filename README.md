# Legal Files Integration

A project that links the Community Services "Yukon.ca" Drupal webforms front-end
to a database operated by a company called LegalFiles.

The project is a Node/Express server running in Docker Compose. It has an
endpoint to accept data from a Drupal form. This calls a controller that
performs some data transforms, then sends the transformed data to the various
LegalFiles endpoints.

## Repository Layout

- [server.js](server.js) - app entrypoint
- [babel.config.json] - Babel config for JS enhancemens and compatability
- [.prettierrc.yaml](.prettierrc.yaml) - Prettier config for code
  auto-formatting.
- [.eslintrc.json](.eslintrc.json) - Eslint config for code quality and linting.
- [src/](src/) - folder containing Express server source code

### Production

- [docker-compose.yaml](docker-compose.yaml) - production Docker Compose
  configuration
- [Dockerfile](Dockerfile) - production Dockerfile
- [rollup.config.js] - production bundler config
- /dist/server-bundle.js - production server bundle, only available in container
  after production build.
- /.env - production environment config, _never_ commit this file.

### Development

- [docker-compose.development.yaml](docker-compose.development.yaml) -
  development Docker Compose configuration
- [development.Dockerfile](development.Dockerfile) - development Dockerfile
- /.env.development - development environment config, _never_ commit this file.
- [nodemon.config.json](nodemon.config.json) - Nodemon config for developement
  code reloading.

#### Test

- [.mocharc.js](.mocharc.js) - mocha configuration file
- [tests/test-setup.js](tests/test-setup.js) - test setup file, loads Chai and
  various other test
- [tests/](tests/) - test folder, test files must follow the format
  `tests/**/*.test.js` plugins

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

5. Build the app via `dev build`; depending on your internet speed, this may
   take a while.

6. Boot the app via `dev up`, wait for it to boot, and then go to the
   [Express app](http://localhost:3000/).

### Testing

1. Build the development setup via `dev build` or
   `docker compose -f docker-compose.development.yaml build`
2. Run the test environment via `dev mocha` or `dev test` or
   `docker compose -f docker-compose.development.yaml run --rm test npm run test`

## Production Deployment

1. Build the app via `docker compose build`.
2. Deploy the build app via `docker compose up`
