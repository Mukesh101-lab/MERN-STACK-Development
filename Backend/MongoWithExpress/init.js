const mongoose = require('mongoose');
const Chat = require('./models/chat');


main()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

Chat.insertMany([
    {
        from: 'Alice',
        to: 'Bob',
        msg: 'Hello, Bob!',
        created_at: new Date()
    },
    {
        from: 'Bob',
        to: 'Alice',
        msg: 'Hi, Alice!',
        created_at: new Date()
    },
    {
        from: 'Alice',
        to: 'Bob',
        msg: 'How are you, Bob?',
        created_at: new Date()
    }
])
    .then(() => console.log('Chats inserted successfully'))
    .catch(err => console.log(err));