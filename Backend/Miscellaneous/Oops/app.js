// Factory function
// function PersonMaker(name, age) {
//     const person ={
//         name: name,
//         age: age,
//         talk() {
//             console.log("Hello, I am " + this.name);
//         }
//     };
//     return person;
// }       

// let p1 = PersonMaker("Mukesh",25);

// Constructor function
// function PersonMaker(name, age) {
//     this.name = name;
//     this.age = age;
//     this.talk = function() {
//         console.log("Hello, I am " + this.name);
//     };
// }

// let p1 = new PersonMaker("Mukesh",25);
// p1.talk();  


// Class
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("Hello, I am " + this.name);
    }
    print(){
    console.log("Name: " + this.name + ", Age: " + this.age);
    }
}



let p1 = new Person("Mukesh",25);
p1.print();