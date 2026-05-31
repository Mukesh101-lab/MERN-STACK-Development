// let btns = document.querySelectorAll("button");

// console.dir(btn);

// btn.onclick = function() {
//     console.log("btn click");
// };

// btn.onclick = () => {
//     console.log("btn was click");
// };

// for(btn of btns){
//     btn.addEventListener("click",sayhello);
//     btn.addEventListener("click",sayName);
// }

// function sayhello(){
//     console.log("hello");
// }

// function sayName(){
//     console.log("apna college");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let randomColor = getRandom();
//     let h1 = document.querySelector("h1");
//     h1.innerText = randomColor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// });

// function getRandom(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// let h2 = document.querySelector("h2");

// function changeColor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//         h2.style.color = color;
//         resolve("color was change");
//     } , delay)
//     }); 
// };

// changeColor("red",1000).then(()=>{
//     console.log("color was chenge");
//     return changeColor("yellow",1000);
// })
// .then(()=>{
//     console.log("color was chenge");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("color was change");
// })
// .catch((err)=>{
//     console.log(err);
// })

// let url = 'https://api.potterdb.com/v1/characters';

// fetch(url)
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })