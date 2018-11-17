const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Set mongoose mpromise to global promise
mongoose.Promise = global.Promise;

// Connect mongo database
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
})
  .then(() => console.log('mongoose connected!'))
  .catch(err => console.error('mongoose error connecting: ', err));

const app = express();
const port = 3000;
const server = http.Server(app);

// Bodyparser
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Main endpoint');
});

server.listen(port, () => console.info(`Listening on port ${port}`));