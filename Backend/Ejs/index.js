const express = require('express');
const app = express();  
const path = require('path');

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

//instagram route
app.get("/ig/:username", (req, res) => {
    // const followers = ["mukesh", "kishan", "ajit", "suresh"];
    const instaData = require('./data.json');
    const username = req.params.username;
    const data = instaData[username];
    if(data) {
        res.render('instagram.ejs', { data });
    }else{
        res.render("error.ejs");
    }
});

//roll dice route
app.get("/rolldice", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs', { randomNumber });
    // res.render('rolldice.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});