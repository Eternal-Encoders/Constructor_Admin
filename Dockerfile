FROM node:20.13-alpine as build-stage
WORKDIR /app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

ENV NODE_OPTIONS="--max-old-space-size=4096"

ARG ORIGIN
ENV ORIGIN=${ORIGIN}

RUN yarn install

COPY ./public ./public
COPY ./src ./src
COPY ./index.html ./index.html
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.node.json ./tsconfig.node.json
COPY ./tsconfig.app.json ./tsconfig.app.json
COPY ./vite.config.ts ./vite.config.ts
COPY ./nginx.conf ./nginx.conf
COPY ./.env.production ./.env.production

RUN yarn build

FROM nginx:stable-alpine-slim

RUN rm /etc/nginx/conf.d/* && rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/

COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]