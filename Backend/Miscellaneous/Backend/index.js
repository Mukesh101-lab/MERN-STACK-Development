const express = require('express');
const app = express();
const path = require('path');


const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    

// app.get("/",(req,res)=>{
//     res.send("Page is working");
// });

app.get("/register",(req,res)=>{
    const {user, password} = req.query;
    console.log(`User: ${user}, Password: ${password}`);
    res.send("get request received");
});

app.post("/register", (req, res) => {
    const { user, password } = req.body;
    console.log(`User: ${user}, Password: ${password}`);
    res.send("post request received");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});