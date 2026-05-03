const express = require('express');
const app = express();
const { faker, tr } = require('@faker-js/faker');
const mysql = require('mysql2');
const path = require('path');
const methodOverride = require('method-override');

const port = 8080;

app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Delta_Aap',
  password: '123123',
});

// show all users data in the home page
app.get('/users', (req, res) => {
    try{
        connection.query('SELECT * FROM user', (err, results) => {
        if (err) throw err;
        res.render('index.ejs', { data: results });
    });
    }catch (error) {
        console.log('Error connecting to the database:', error);
    }   
    
});

// create new user data
app.get('/users/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/users/new', (req, res) => {
    const { username, email, password } = req.body; 
    const userId = faker.string.uuid();

    try {
        connection.query('INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)', [userId, username, email, password], (err, results) => {
            if (err) throw err;
            res.redirect('/users');
        }); 
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
});

//show single user data 
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;

    connection.query('SELECT * FROM user WHERE id = ?', [userId], (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            res.status(404).send('User not found');
            return;
        }
        res.render('show.ejs', { data: results[0] });
    });
});  

//edit user data
app.get('/users/:id/edit', (req, res) => {
    const userId = req.params.id;
    connection.query('SELECT * FROM user WHERE id = ?', [userId], (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            res.status(404).send('User not found');
            return;
        }
        res.render('edit.ejs', { data: results[0] });
    });
});  

app.put('/users/:id/edit', (req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;
    connection.query('UPDATE user SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, userId], (err, results) => {
        if (err) throw err;
        res.redirect(`/users`);
    });
});

//delete user data
app.delete('/users/:id/delete', (req, res) => {
    const userId = req.params.id;
    connection.query('DELETE FROM user WHERE id = ?', [userId], (err, results) => {
        if (err) throw err;
        res.redirect(`/users`);
    });
});


// let users = [];

// for (let i = 0; i < 100; i++) {
//   users.push(createRandomUser());
// }


// try {
//     connection.query(q, [users] ,  (err, results) => {
//         if (err) throw err;
//         console.log(results);
//     });
// }catch (error) {
//     console.error('Error connecting to the database:', error);
// }   

// connection.end();


app.get('/', (req, res) => {
    res.send('Page working');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});