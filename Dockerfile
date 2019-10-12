FROM node:alpine AS build-deps

WORKDIR /opt/ultimanager-web
COPY package.json yarn.lock ./

RUN yarn

COPY . ./


FROM node AS dev

EXPOSE 8080

ENV ULTIMANAGER_API_ROOT=http://localhost:8000

WORKDIR /opt/ultimanager-web
COPY --from=build-deps /opt/ultimanager-web /opt/ultimanager-web
RUN yarn --dev

CMD ["yarn", "start"]


FROM build-deps AS prod-build

RUN yarn build


FROM nginx:alpine AS serve

RUN apk add gettext

COPY ./docker-entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=prod-build /opt/ultimanager-web/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT /usr/local/bin/docker-entrypoint.sh
