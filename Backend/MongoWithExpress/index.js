const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Chat = require('./models/chat');
const path = require('path');
const methodOverride = require('method-override');

const port = 8080;

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

//all chats

app.get('/chats', async (req, res) => {
    try {
        const chats = await Chat.find().sort({ created_at: -1 });
        res.render('index.ejs', { chats });
    } catch (err) {
        console.log(err);
    }
});


//new chat form
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/chats', async (req, res) => {
    const { from, to, msg } = req.body; 
    try {
        const newChat = new Chat({ from, to, msg });
        await newChat.save();
        res.redirect('/chats');
    } catch (err) {
        console.log(err);
    }
});

//edit chat form
app.get('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    try {
        const chat = await Chat.findById(id);
        res.render('edit.ejs', { chat });
    } catch (err) {
        console.log(err);
    }
});     

app.put('/chats/:id', async (req, res) => {
    const { id } = req.params;
    const { from, to, msg } = req.body; 
    try {
        await Chat.findByIdAndUpdate(id, { from, to, msg });
        res.redirect('/chats');
    } catch (err) {
        console.log(err);
    }
});

//delete chat
app.delete('/chats/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Chat.findByIdAndDelete(id);
        res.redirect('/chats');
    }  catch (err) {
        console.log(err);
    }   
});


// let chat1 = new Chat({
//     from: 'Alice',
//     to: 'Bob',
//     msg: 'Hello, Bob!',
//     created_at: new Date()
// });

// chat1.save()
//     .then(() => console.log('Chat saved successfully'))
//     .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Page is working');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});