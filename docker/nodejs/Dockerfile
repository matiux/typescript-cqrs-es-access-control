FROM node:12.5.0-alpine

RUN npm i -g @nestjs/cli

RUN apk update \
    && apk --no-cache add \
    bash

# Create and define the node_modules's cache directory.
# RUN mkdir /usr/src/cache
# WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install

# ADD . /usr/src/app
WORKDIR /usr/src/app

# RUN adduser -D -u 1000 utente \
#     && adduser utente www-data \
#     && chown -R utente /home/utente \
#     && chown -R utente /var/www/app

# RUN npm install

# CMD ["npm", "run", "dev"]