// console.log("Hellow Mukesh");

// let a = 10;
// let b = 5;
// console.log(`Total Price is : ${a + b}`);

//Arithmetic Operator
// let a = 10;
// let b = 5;

// console.log(`sum : ${a + b}`);
// console.log(`sub : ${a - b}`);
// console.log(`mul : ${a * b}`);
// console.log(`div : ${a / b}`);
// console.log(`mod : ${a % b}`);
// console.log(`exp : ${a ** b}`);

//Comparison Operator
// console.log(a > b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a != b);

//Conditional Statement

//Trafic Light 
// let color = "yelw";
// if(color === "red"){
//     console.log("Stop");
// }
// else if(color === "yellow"){
//     console.log("slow")
// }
// else if(color === "green"){
//     console.log("go");
// }
// else{
//     console.log("Light is Broken");
// }

// let age = 20;
// if(age >= 25){
//     console.log("you can vote");
// }else if(age < 25){
//     console.log("you con't vote");
// }

// let size = 'S';
// if(size === 'XL'){
//     console.log(`Price is : ${250}`)
// }
// else if(size === 'L'){
//     console.log(`Price is : ${200}`)
// }
// else if(size === 'M'){
//     console.log(`Price is : ${150}`)
// }
// else{
//     console.log(`Price is : ${100}`)
// }

// let str = "ango";
// if(str[0] === 'a' && str.length > 3){
//     console.log("good String");
// }else{
//     console.log("not good string");
// }

// let color = "green";

// switch(color){
//     case "red" : {
//         console.log("Stop");
//     }
//     case "yellow" : {
//         console.log("slow");
//     }
//     case "green" : {
//         console.log("go");
//     }
// }

// let day = '10';

// switch(day){
//     case '1' : {
//         console.log("Monday")
//         break;
//     }
//     case '2' :{
//         console.log("Tuesday");
//         break;
//     }
//     case '3' :{
//         console.log("wednesday");
//         break;
//     }
//     case '4 ' : {
//         console.log("thursday");
//         break
//     }
//     case '5' : {
//         console.log("Friday");
//         break;
//     }
//     case '6' : {
//         console.log("saturday");
//         break;
//     }
//     case '7' : {
//         console.log("sunday");
//         break;
//     }
//     default : {
//         console.log("wrong day");
//         break;
//     }
// }

// alert("wrong paste");
// let name = prompt("how are you : ");
// console.log(name);

// let firstName = prompt("enter first name : ");
// let lastName = prompt("enter last name  : ");

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let a = '32';
// let b = '4285';

// if(a[a.length-1] === b[b.length-1]){
//     console.log("last digit same");
// }else{
//     console.log("not same last digit");
// }

// let a = 5;
// let b = 10;
// let c = 15;

// if(a > b && a > c){
//     console.log("a is large");
// }
// else if(b > c){
//     console.log("b is large");
// }
// else{
//     console.log("c is large");
// }

// let str = "    Mukesh   Patel  ";
// console.log(str);
// console.log(str.trim());

// let str = "apnaCollege";
// let str = "mukesh";

// let student = ["aman","mukesh"];

// let mounth = ["january","july","march","august"];

// let color = ["pink","orange","yellow","red","green","purple","white"];

// for(let i=1;i<=15;i+=2){
//     console.log(i);
// }


// let favMovie = "avatar";
// let guess = prompt("Guess Movie : ");

// while(true){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     else if(guess == favMovie){
//         console.log("wow nice");
//         break;
//     }
//     guess = prompt("wrong please try again");
// }


// let todo = [];

// let req = prompt("please enter your request : ");

// while(true){
//     if(req == "quit"){
//         console.log('To exit the todo');
//         break;
//     }
//     if(req == "list"){
//         console.log("--------------------");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("----------------------");
//     }
//     else if(req == "add"){
//         let task = prompt("enter list add");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req == "delete"){
//         todo.pop();
//         console.log("delete task");
//     }
//     req = prompt("please enter your request : ");
// }

// let student = {
//     name: "mukesh",
//     age: 20,
//     city: "surat",
//     isMarried: false,
// };


// const item = {
//     name: "laptop",
//     price: 50000,
//     color: "black",
//     isAvailable: true,
// };


// const posts = {
//     userName: "mukesh",
//     content: "javascript is good",
//     likes: 100,
//     repost: 20,
//     tags: ["javascript", "programming", "web development"],
//     isPublic: true,
// };

// const ClassInfo = {
//     aman:{
//         age: 22,
//         city: "surat",
//     },
//     mukesh:{
//         age: 20,
//         city: "surat",
//     },
//     ramesh:{
//         age: 25,
//         city: "surat",
//     },
//     suresh:{
//         age: 30,
//         city: "surat",
//     },
// };


// const classInfo = [
//     {
//         name: "Aman",
//         age: 22,
//         city: "surat"
//     },
//     {
//         name: "Mukesh",
//         age: 20,
//         city: "surat"
//     },
//     {
//         name: "Ramesh",
//         age: 25,
//         city: "surat"
//     },
//     {
//         name: "Suresh",
//         age: 30,
//         city: "surat"
//     }
// ];


// let num = Math.floor(Math.random() * 10) + 1;
// console.log(num);

// const max = prompt("Enter the maximum number : ");
// const randomNum = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number : ");

// while(true){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     else if(guess == randomNum){
//         console.log("wow nice");
//         break;
//     }
//     else if(guess < randomNum ){
//         guess = prompt("too low, please try again");
//     }
//     else{
//         guess = prompt("too high, please try again");
//     }
// };