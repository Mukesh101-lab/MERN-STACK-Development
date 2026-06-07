const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const port = 8080;

app.set("view engine", "ejs");
app.set("viwes", path.join(__dirname, "/viwes"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "123123",
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

app.get("/", (req, res) => {
    let q = "select count(*) from user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    }
    catch {
        console.log(err);
    }
})

app.get("/user", (req, res) => {
    let q = "select * from user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let data = result;
            res.render("show.ejs", { data });
        });
    }
    catch {
        console.log(err);
    }
})


//create new data
app.get("/user/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/user",(req,res) =>{
    let {username,email,password} = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
    try {
        connection.query(q,[id,username,email,password], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    }
    catch {
        console.log(err);
    }

})


app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let data = result[0];
            res.render("edit.ejs", { data });
        });
    }
    catch {
        console.log(err);
    }
});

app.put("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username, password } = req.body;
    let q = `UPDATE user SET username = ?, password = ? WHERE id = ?`;
    try {
        connection.query(q, [username, password, id], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    }
    catch {
        console.log(err);
    }
})

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let q = "DELETE FROM user WHERE id = ?";
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    }
    catch {
        console.log(err);
    }
})

// try {
//     connection.query(q,[data],(err, res) => {
//         if (err) throw err;
//         console.log(res);
//     })
// }
// catch {
//     console.log(err);
// }


app.listen(port, () => {
    console.log(`app is listen on port ${port}`);
});

