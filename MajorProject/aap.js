const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./modals/listing')
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);

main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}

app.get('/',(req,res) =>{
    res.send("hi,i am Mukesh")
});


//show all listings
app.get('/listings',wrapAsync(async(req, res) => {
    const listings = await Listing.find();
    res.render('listings/index.ejs', { listings });
}));

//new listing form
app.get('/listings/new', (req, res) => {
    res.render('listings/new.ejs');
});

app.post('/listings', wrapAsync(async (req, res, next) => {
    let newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect('/listings');
}));


//show single listing
app.get('/listings/:id',wrapAsync(async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    res.render('listings/show.ejs', { listing });
}));


//edit route
app.get('/listings/:id/edit',wrapAsync(async(req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/edit.ejs', { listing });

}));

app.put('/listings/:id',wrapAsync(async(req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    res.redirect(`/listings/${id}`);
}));

//delete route
app.delete('/listings/:id',wrapAsync(async(req,res) =>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
}));

app.all("*",(req,res,next) =>{
    next(new ExpressError(404,"Page Not Found!"));
});

//middleware
app.use((err,req,res,next) =>{
    let {statusCode=500,message="something went wrong"} = err;
    res.status(statusCode).send(message);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});