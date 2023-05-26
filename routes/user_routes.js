// ------------------------------------- Initialization ------------------------------- //
const Express = require('express');
const controller = require('../controllers/user_controller');
const router = Express.Router();
// ------------------------------------- Middleware ------------------------------- //
router.param('id', (req, res, next, value) => {
  console.log('id used is: ' + value);
  next();
});
// ------------------------------------- Routing ------------------------------- //
router.route('/')
  .get(controller.getAllUsers)
  .post(controller.createUser);
router.route('/:id')
  .get(controller.getUser)
  .delete(controller.deleteUser);

module.exports = router;
