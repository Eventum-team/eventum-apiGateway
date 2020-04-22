FROM node:carbon-slim
WORKDIR /ev-api

COPY package*.json /ev-api/
RUN npm install

COPY . /ev-api/
EXPOSE 3000
CMD ["npm", "start"]