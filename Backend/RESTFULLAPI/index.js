const express =require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


const port = 8080;

app.set('view engine','ejs');
app.use(methodOverride('_method')); 
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

//checking if the server is working or not
app.get('/',(req,res)=>{
    res.send('Page Working');
});

let posts = [
    {id:uuidv4(),name:'Mukesh',content:'This is the first post'},
    {id:uuidv4(),name:'Kishan',content:'This is the second post'},
    {id:uuidv4(),name:'Ajit',content:'This is the third post'},
];

// all posts to render the home page
app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
});

//create a new post
app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
});

app.post('/posts',(req,res)=>{
    const {id,name,content} = req.body;
    posts.push({id:uuidv4(),name,content});
    res.redirect('/posts');
});


//show a single post
app.get('/posts/show/:id',(req,res)=>{
    const {id} = req.params;
    const post = posts.find(p=>p.id === id);
    if(!post){
        return res.send('Post not found');
    }
    res.render('show.ejs',{post});
});

//edit a post
app.get('/posts/edit/:id',(req,res)=>{
    const {id} = req.params;
    const post = posts.find(p=>p.id === id);
    if(!post){
        return res.send('Post not found');
    }
    res.render('edit.ejs',{post});
}); 

app.put('/posts/:id',(req,res)=>{
    const {id} = req.params;
    const post = posts.find(p=>p.id === id);
    const {name,content} = req.body;
    post.name = name;
    post.content = content;
    res.redirect('/posts');
});

//delete a post
app.delete('/posts/delete/:id',(req,res)=>{
    const {id} = req.params;
    const post = posts.find(p => p.id === id);
    if(!post){
        return res.send('Post not found');
    }
    posts = posts.filter(p => p.id !== id); 
    res.redirect('/posts');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}); 