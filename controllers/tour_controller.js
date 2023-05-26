// ------------------------------------- Initialization ------------------------------- //
const Tour = require(`${__dirname}/../models/tour_models`);

// ------------------------------------- Controllers ------------------------------- //
module.exports = {
  getAllTours: async (req, res) => {
    try {
      const data = await Tour.find();
      res.status(200).json({
        status: 'Success',
        request_time: req.requestTime,
        results: data.length,
        data,
      });
    } catch (err) {
      res.status(404).json({
        status: 'Fail',
        request_time: req.requestTime,
        message: err.message,
      });
    }
  },

  getTourById: async (req, res) => {
    try {
      const data = await Tour.findById(req.params.id);
      res.status(200).json({
        status: 'Success',
        request_time: req.requestTime,
        data,
      });
    } catch (err) {
      res.status(404).json({
        status: 'Fail',
        request_time: req.requestTime,
        message: err.message,
      });
    }
  },

  postNewTour: async (req, res) => {
    try {
      const entity = await Tour.create(req.body);
      entity.save();

      res.status(201).json({
        status: 'Created',
        request_time: req.requestTime,
        message: 'Tour created sucessfully!!',
      });
    } catch (err) {
      res.status(400).json({
        status: 'Error',
        request_time: req.requestTime,
        message: err.message,
      });
    }
  },

  patchTour: async (req, res) => {
    try {
      const data = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      res.status(200).json({
        status: 'Success',
        request_time: req.requestTime,
        data,
      });
    } catch (err) {
      res.status(404).json({
        status: 'Fail',
        request_time: req.requestTime,
        message: err.message,
      });
    }
  },

  deleteTour: async (req, res) => {
    try {
      await Tour.findByIdAndDelete(req.params.id);

      res.status(200).json({
        status: 'Success',
        request_time: req.requestTime,
        message: 'Deleted successfully!',
      });
    } catch (err) {
      res.status(404).json({
        status: 'Fail',
        request_time: req.requestTime,
        message: err.message,
      });
    }
  },
};
