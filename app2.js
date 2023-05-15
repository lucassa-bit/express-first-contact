const Express = require('express');
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const server = new Express();

server.use(Express.json());

const getAllTours = (req, res) => {
  res
    .json({
      status: 'Accepted',
      data: {
        tours,
      },
    })
    .status(200);
};

const getTour = (req, res) => {
  const tour = tours.find((value) => value.id === Number(req.params.id));
  res
    .json({
      status: 'Accepted',
      data: {
        tour,
      },
    })
    .status(200);
};

const createTour = (req, res) => {
  const newId = tours.slice(-1)[0].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'Created',
        message: 'Tour created sucessfully!!',
      });
    }
  );
};

server.get('/api/v1/tours', getAllTours);
server.get('/api/v1/tours/:id', getTour);
server.post('/api/v1/tours', createTour);

server.listen(8080, () => {
  console.log(`
---------------------------------
        Server iniciado... 
---------------------------------`);
});
