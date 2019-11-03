FROM node:10.16-alpine AS build-app
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY ./ .
RUN npm run lint && npm run build

FROM node:10.16-alpine
WORKDIR /app
COPY --from=build-app /app/package.json .
COPY --from=build-app /app/package-lock.json .
RUN npm install --production
COPY --from=build-app /app/out .
COPY --from=build-app /app/src/web/static ./src/web/static
COPY --from=build-app /app/src/web/views ./src/web/views
ENV PORT=80
CMD node main.js
