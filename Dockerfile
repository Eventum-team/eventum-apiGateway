FROM node:carbon-slim
WORKDIR /ev-apigateway
COPY package*.json /ev-apigateway/
RUN npm install

COPY . /ev-apigateway/
EXPOSE 3000
CMD ["npm", "start"]