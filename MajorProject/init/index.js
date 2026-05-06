const Listing = require('../modals/listing');
const mongoose = require('mongoose');
const data = require('./data');

main()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

  await initDB();
}

async function initDB() {
  try {
    await Listing.deleteMany({});

    await Listing.insertMany(data.data); 

    console.log('Listing saved successfully');
  } catch (err) {
    console.log(err);
  }
}