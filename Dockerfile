FROM node:10-alpine

WORKDIR /home/test

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]
