const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

let posts = [
    {
        id:uuidv4(),
        name:"Mukesh",
        content:"hi , my name is mukesh"
    },
    {
        id:uuidv4(),
        name:"ajit",
        content:"i love coding"
    }
]

//All Posts
app.get("/posts",(req,res) =>{
    res.render("index.ejs",{posts});
})

//Create new Post
app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/posts",(req,res) =>{
    let id = uuidv4();
    let {name,content} = req.body;
    posts.push({id,name,content});
    res.redirect("/posts");
})

//show posts
app.get("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
});

//edit post 
app.get("/posts/:id/edit",(req,res) =>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res) =>{
    let {id} = req.params;
    let {content} = req.body;
    let post = posts.find((p)=> id === p.id);
    post.content = content;
    res.redirect("/posts");
});

//delete post
app.delete("/posts/:id",(req,res) =>{
    let {id} = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
})

app.listen(port,() =>{
    console.log(`app is listen on port ${port}`);
})