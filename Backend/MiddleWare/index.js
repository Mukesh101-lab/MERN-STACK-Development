const express = require("express");
const app = express();
const ExpressError = require("./EpressError");

const port = 8080;

// app.use((req,res,next)=>{
//     console.log("hi,i am first middlewarw");
//     // res.send("MiddleWare Finised");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("hi,i am second middlewarw");
//     // res.send("MiddleWare Finised");
//     next();
// });

// const checkToken = (req,res,next) =>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("Access Denide");
// };

// app.get("/api",checkToken,(req,res) =>{
//     res.send("data");
// });

app.get("/admin",(req,res) =>{
    throw new ExpressError(403,"Access to admin is forbiden");
})

app.get("/err",(req,res) =>{
    abcd = abcd;
});

app.use((err,req,res,next) =>{
    console.log(err);
    next(err);
})

// app.use((req,res,next) =>{
//     req.time = new Date(Date.now());
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

app.get("/",(req,res) =>{
    res.send("hi, i am root");
});

app.get("/random",(req,res) =>{
    res.send("this a random page");
});

app.use((req,res) => {
    res.send("Page Not Found")
});

app.listen(port,() =>{
    console.log(`app is listen on ${port}`);
});