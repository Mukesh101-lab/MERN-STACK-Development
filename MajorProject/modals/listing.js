const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image : {
  url: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWoWp5W6Txwf6qQChiwZmelUAz5LKZqTD_zlCarRLF9sD15XNSWC9FzQ&s',
    set: (v) =>
      v === ''
        ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWoWp5W6Txwf6qQChiwZmelUAz5LKZqTD_zlCarRLF9sD15XNSWC9FzQ&s'
        : v,
  }
},
    price: { type: Number, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;