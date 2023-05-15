// ------------------------------------- Initialization ------------------------------- //
const Express = require('express');
const controller = require('../controllers/tour_controller');

const router = Express.Router();
// ------------------------------------- Middleware ------------------------------- //
router.param('id', controller.checkId);

// ------------------------------------- Routing ------------------------------- //

router
  .route('/')
  .get(controller.getAllTours)
  .post(controller.checkBody, controller.postNewTour);
router
  .route('/:id')
  .get(controller.getTourById)
  .patch(controller.patchTour)
  .delete(controller.deleteTour);
module.exports = router;
