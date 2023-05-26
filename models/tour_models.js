const mongoose = new require('mongoose');

const tour_schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'TOUR MUST HAVE A NAME'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'TOUR MUST HAVE A PRICE'],
  },
});
const Tour = mongoose.model('Tour', tour_schema);
  
module.exports = Tour;
