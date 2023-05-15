// ------------------------------------- Initialization ------------------------------- //
const fs = require('fs');

// ------------------------------------- Database ------------------------------- //
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// ------------------------------------- Controllers ------------------------------- //
module.exports = {
  checkId: (req, res, next, val) => {
    const tour = tours.find((value) => value.id === Number(val));
    if (!tour)
      return res.status(404).json({
        status: 'Not found',
        request_time: req.requestTime,
        message: 'Tour was not found',
      });
    next();
  },
  checkBody: (req, res, next) => {
    if (!req.body.name || !req.body.price) {
      const message =
        (!req.body.name ? 'name ' : '') +
        (!req.body.name && !req.body.price ? ' and ' : '') +
        (!req.body.price ? 'price ' : '') +
        'is missing!';
      return res.status(400).json({
        status: 'Bad request',
        request_time: req.requestTime,
        message: message,
      });
    }
    next();
  },
  getAllTours: (req, res) => {
    res.status(200).json({
      status: 'Success',
      request_time: req.requestTime,
      results: tours.length,
      data: {
        tours,
      },
    });
  },

  getTourById: (req, res) => {
    const tour = tours.find((value) => value.id === Number(req.params.id));

    res.status(200).json({
      status: 'Success',
      request_time: req.requestTime,
      data: {
        tour,
      },
    });
  },

  postNewTour: (req, res) => {
    const newId = tours.slice(-1)[0].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        res.status(201).json({
          status: 'Created',
          request_time: req.requestTime,
          message: 'Tour created sucessfully!!',
        });
      }
    );
  },

  patchTour: (req, res) => {
    const tour = tours.find((value) => value.id === Number(req.params.id));

    res.status(200).json({
      status: 'Success',
      request_time: req.requestTime,
      message: 'All worked',
    });
  },

  deleteTour: (req, res) => {
    const tour = tours.findIndex((value) => value.id === Number(req.params.id));

    tours.splice(tour, 1);
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        res.status(204).json({
          status: 'Success',
          request_time: req.requestTime,
          message: 'All worked',
        });
      }
    );
  },
};
