const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// connect the client views
app.use(express.static('client/'));

const port = process.env.PORT || 3000;

// using express() tell server to listen to 'port'
const server = app.listen(port, () => {
  console.log('listening to port:', port);
});

// export the server for other models to access
module.exports = server;
