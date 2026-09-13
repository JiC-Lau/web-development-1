
/*Exercise 1 – Developer Tools and Console*/
console.log("Hello, world!");
alert("Hello, world!");

/*Exercise 2 – Variables*/
const myName = "Ji";
console.log(myName);
let myAge = 25;
console.log(myAge);
const myFavoriteAnimal = "dog";
console.log(myFavoriteAnimal);

console.log("Hello! My name is " + myName + " and I am " + myAge + " years old. My favorite animal is a " + myFavoriteAnimal + ".");

/*Exercise 3 – User Input*/
const userName = prompt("What is your name?");
console.log("Hello, " + userName + "!" + " Welcome to JavaScript!");

/*Exercise 4 – Conditionals*/
const age = prompt("How old are you?");
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

/*Exercise 5 – Functions*/

function greetUser(name) {
    console.log("Hello, " + name + "!");
}
const userName = prompt("What is your name?");
greetUser(userName);

/*Exercise 6 – Button – Connect JavaScript to the Page*/
function sayHi() {
    alert("Hi! Welcome to my favorite animal page.");
}

