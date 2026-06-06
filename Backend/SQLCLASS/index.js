const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine","ejs");
app.set("viwes",path.join(__dirname,"/viwes"));

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
            res.render("home.ejs",{count});
        });
    }
    catch {
        console.log(err);
    }
})

app.get("/user",(req,res) =>{
    let q = "select * from user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let data = result;
            res.render("show.ejs",{data});
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

