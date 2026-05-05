const mongoose = require('mongoose');

main()
    .then(() => console.log('Connected to MongoDB'))    
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age : Number,
    password: String
});

const User = mongoose.model('User', userSchema);

// let user1 = new User({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     age: 30,
//     password: "password123"
// });

// user1.save()
//     .then(() => console.log('User saved successfully'))
//     .catch(err => console.log(err));

// User.insertMany([
//     {
//         name: "Alice Smith",
//         email: "alice.smith@example.com",
//         age: 25,
//         password: "password123"
//     },
//     {
//         name: "Bob Johnson",
//         email: "bob.johnson@example.com",
//         age: 35,
//         password: "password456"
//     },
//     {
//         name: "Charlie Brown",
//         email: "charlie.brown@example.com",
//         age: 40,
//         password: "password789"
//     }
// ])
// .then(() => console.log('Users inserted successfully'))
// .catch(err => console.log(err));    

// User.findOne("69f976ba7c87be46180f2fd0")
//     .then(users => console.log(users))
//     .catch(err => console.log(err));

// User.findByIdAndUpdate("69f976ba7c87be46180f2fd0", {name: "John Doe Updated", age: 31})
//     .then((res) => console.log('User updated successfully', res))
//     .catch(err => console.log(err));

// User.deleteOne({name: "John Doe Updated"})
//     .then((res) => console.log('User deleted successfully', res))
//     .catch(err => console.log(err));

// User.findByIdAndDelete('69f959f9ef2987a7a07c3ecb')
//     .then((res) => console.log('User deleted successfully', res))
//     .catch(err => console.log(err));    