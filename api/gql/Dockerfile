FROM node:11-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn install && yarn build
EXPOSE 80
CMD ["/bin/sh", "-c", "/usr/src/app/entrypoint.sh"]
