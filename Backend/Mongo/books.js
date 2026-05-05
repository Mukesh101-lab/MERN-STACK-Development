const mongoose = require('mongoose');

main()
    .then(() => console.log('Connected to MongoDB'))    
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amozon');
  
}

const bookSchema = new mongoose.Schema({
    title:{ 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
});

const Book = mongoose.model('Book', bookSchema); 

const book1 = new Book({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99
});

book1.save()
    .then((res) => console.log('Book saved successfully', res))
    .catch(err => console.log(err));

