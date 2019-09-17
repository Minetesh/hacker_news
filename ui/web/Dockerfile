FROM node:11-alpine

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN yarn install
RUN yarn add global react-scripts

EXPOSE 3000

CMD ["yarn", "start"]
