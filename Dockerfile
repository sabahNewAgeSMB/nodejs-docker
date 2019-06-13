FROM node:10-alpine

WORKDIR /opt/node

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]
