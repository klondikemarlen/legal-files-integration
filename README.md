# Legal Files Integration

A project that links the Community Services "Yukon.ca" Drupal webforms front-end
to a database operated by a company called LegalFiles.

The project is a Node/Express server running in Docker Compose. It has an
endpoint to accept data from a Drupal form. This calls a controller that
performs some data transforms, then sends the transformed data to the various
LegalFiles endpoints.

## Repository Layout

- docker-compose.development.yaml - development configuration
- docker-compose.production.yaml - production configuration
- src/ - folder containing Express server source code

## Development

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
