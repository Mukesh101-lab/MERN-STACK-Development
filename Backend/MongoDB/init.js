const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChat = [
    {
        from: "Mukesh",
        to: "Rahul",
        msg: "Hello Rahul, kaise ho?",
        created_at: new Date()
    },
    {
        from: "Rahul",
        to: "Mukesh",
        msg: "Main theek hoon, tum batao?",
        created_at: new Date()
    },
    {
        from: "Priya",
        to: "Ankit",
        msg: "Kal meeting kitne baje hai?",
        created_at: new Date()
    },
    {
        from: "Ankit",
        to: "Priya",
        msg: "Kal 10 baje meeting hai.",
        created_at: new Date()
    },
    {
        from: "Sonia",
        to: "Aman",
        msg: "Project complete ho gaya kya?",
        created_at: new Date()
    }

];

async function initDB() {
  await Chat.insertMany(allChat);
  console.log("Sample data inserted");
}

initDB();