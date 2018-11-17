FROM node:10.13

RUN mkdir /api

WORKDIR /api
COPY . .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]