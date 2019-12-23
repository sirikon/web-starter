ARG node_version=12.13

# Build image
FROM node:${node_version}-alpine AS build-app
RUN apk add --update --no-cache bash
WORKDIR /app

## Development dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

## Favicon generation
COPY ./favicons ./favicons
RUN npm run favicons

## Linting and building
COPY ./src ./src
COPY ./typings ./typings
COPY ./tsconfig.json .
COPY ./tslint.json .
RUN npm run lint && \
  npm run build && \
  npm run build:style

## Resources
COPY ./resources ./resources

# Production image
FROM node:${node_version}-alpine
WORKDIR /app

## Production dependencies
COPY --from=build-app /app/package.json .
COPY --from=build-app /app/package-lock.json .
RUN npm install --production

## Copy files from build image
COPY --from=build-app /app/out .
COPY --from=build-app /app/resources ./resources

## Run
ENV WEB_PORT=80
CMD node src/main.js
