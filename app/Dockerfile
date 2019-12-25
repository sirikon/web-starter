# Build image
FROM node:12-alpine AS build-app
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
  npm run build:style && \
  npm prune --production

## Resources
COPY ./resources ./resources

# Production image
FROM alpine:3.11
RUN apk add --update --no-cache nodejs~12
WORKDIR /app

## Production files
COPY --from=build-app /app/package.json .
COPY --from=build-app /app/node_modules ./node_modules
COPY --from=build-app /app/out .
COPY --from=build-app /app/resources ./resources
COPY --from=build-app /app/tsconfig.json .

## Run
ENV WEB_PORT=80
CMD node -r tsconfig-paths/register src/main.js
