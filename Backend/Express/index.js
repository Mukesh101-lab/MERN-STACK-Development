const express = require("express");
const app = express();

const port = 8080;

app.get("/",(req,res) =>{
    res.send("Hello World");
})

app.get("/search",(req,res) =>{
    const { q } = req.query;
    res.send(`Search Page: ${q}`);        
});

// app.get("/:username",(req,res) =>{
//     // const username = req.params.username;
//     const { username } = req.params;
//     console.log(username);
//     res.send(`Hello ${username}`);
// });

// app.get("/apple",(req,res) =>{
//     res.send("Hello Apple");
// })

// app.get("/mango",(req,res) =>{
//     res.send("Hello Mango");
// });

// app.get("/banana",(req,res) =>{
//     res.send("Hello Banana");
// });

// app.get("*",(req,res) =>{
//     res.send("404 Not Found");
// });

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});