const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const port = 8080;

// app.use((req,res,next) =>{
//     // let {q} = req.query;
//     // console.log(q);
//     console.log("hi,i am first middleware");
//     // res.send("hi,i am first middleware");
//     next();
// });

// app.use((req,res,next) =>{
//     let responseTime = new Date(Date.now().toString());
//     console.log(responseTime);
//     console.log(req.method,req.hostname,req.path,req.responseTime);
//     next();
// });

const checkToken = (req,res,next) =>{
    let {q} = req.query;
    if(q == "giveaccess"){
        next();
    }else{
        throw new ExpressError(401,"Access Denide");
    }
};

app.use("/api",checkToken ,(req,res) =>{
    res.send("Data Access");
});

app.get("/",(req,res) =>{
    abcd = abcd;
});

app.get("/admin",(req,res) =>{
    throw new ExpressError(403,"Access to admin is forbidden");
});

app.use((err,req,res,next) =>{
    console.log("--- error ----");
    let {status = 500 , message = "some error"} = err;
    res.status(status).send(message);
});

app.get("/random",(req,res) =>{
    res.send("hi , i am random page");
});

app.use((req,res) =>{
    res.send("page not found");
});

app.listen(port,() =>{
    console.log(`app is listen on port ${port}`);
});