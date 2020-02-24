FROM node:12-alpine
RUN npm install -g nodemon
WORKDIR /usr/src
COPY ./package*.json ./
RUN npm install
 
COPY ./src ./app
CMD ["nodemon", "./app"]