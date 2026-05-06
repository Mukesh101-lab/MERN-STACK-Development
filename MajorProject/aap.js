const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./modals/listing')
const path = require('path');

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}


//home page show all listings
app.get('/listings', async(req, res) => {
    const listings = await Listing.find();
    res.render('index.ejs', { listings });
});

//new listing form
app.get('/listings/new', (req, res) => {
    res.send('Page is working');
    // res.render('new.ejs');
});

app.post('/listings', async(req, res) => {
    console.log(req.body);
    const listing = new Listing(req.body);
    await listing.save();
    res.redirect('/listings');
});


//show single listing
app.get('/listings/:id', async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    res.render('show.ejs', { listing });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});