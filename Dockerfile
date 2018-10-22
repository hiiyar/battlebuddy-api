FROM node:alpine

RUN mkdir /app

COPY ./ /app

WORKDIR /app

RUN ["npm", "install"]

EXPOSE 5000

CMD node src/app.js


