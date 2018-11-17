const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

// Set mongoose mpromise to global promise
mongoose.Promise = global.Promise;

// Connect mongo database
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose connected!');
});

const app = express();
const port = 3000;
const server = http.Server(app);

// Bodyparser
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use('/', routes);

server.listen(port, () => console.info(`Listening on port ${port}`));
