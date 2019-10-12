# Base image with dependencies used to build the app.
FROM node AS build-deps

WORKDIR /opt/ultimanager-web
COPY package.json yarn.lock ./

RUN yarn --dev

COPY . ./


# Development image for running the dev server
FROM build-deps AS dev

EXPOSE 8080

CMD ["yarn", "start"]


FROM build-deps AS prod-build

RUN yarn build


# Production image that serves the built static files
FROM nginx:alpine AS serve

RUN apk add --no-cache gettext

COPY ./docker-entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=prod-build /opt/ultimanager-web/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT /usr/local/bin/docker-entrypoint.sh
