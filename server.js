require('dotenv').config();

const server = require('./app');
const mongoose = require('mongoose');

const db_url = process.env.DB_URL.replace(
  '<USERNAME>',
  process.env.DB_USERNAME
).replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(process.env.DB_URL_LOCAL).then(() => {
  console.log('DB connected!!!');
});

server.listen(process.env.PORT || 8080, () => {
  console.log(
    '---------------------------------\n\t Server iniciado... \n---------------------------------'
  );
});
