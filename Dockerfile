FROM node:10.13

RUN mkdir /api

WORKDIR /api
COPY package.json /api/package.json
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]