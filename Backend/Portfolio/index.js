const express = require('express');
const app = express();  
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 8080;

app.get('/', (req, res) => {
    const portData = require('./data.json');
    res.render('index.ejs', { portData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});