const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

const port = 8080;

app.set("view engine" ,"ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

main().then(() => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



app.get("/", (req, res) => {
    res.send("page working");
})

//show all chats
app.get("/chats",async(req,res) =>{
   try {
        const allChats = await Chat.find({});
        res.render("index.ejs", { allChats });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching chats");
    }

});

//Create new chat
app.get("/chats/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/chats",async(req,res) =>{
    const {from,to,msg} = req.body;
    const newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date()
    });
    await newChat.save();
    res.redirect("/chats");
});

//edit msg
app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const { from, to, msg } = req.body;
    await Chat.findByIdAndUpdate(id, {
        from,
        to,
        msg
    });
    res.redirect("/chats");
});

//delete msg
app.delete("/chats/:id", async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(port, () => {
    console.log(`app is listen on port ${port}`);
})