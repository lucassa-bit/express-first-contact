// ------------------------------------- Initialization ------------------------------- //
const Express = require('express');
const tourRouter = require(`./routes/tour_routes`);
const userRouter = require(`./routes/user_routes`);

const server = new Express();
// ------------------------------------- Middleware ------------------------------- //

if (process.env.NODE_ENV === 'development') {
  server.use(require('morgan')('dev'));
}

server.use(Express.json());
server.use(Express.static(`${__dirname}/public`));

server.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

// Tours route
server.use('/api/v1/tours', tourRouter);
// User route
server.use('/api/v1/users', userRouter);

module.exports = server;
