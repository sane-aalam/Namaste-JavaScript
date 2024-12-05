
// Episode 3 : Hoisting in JavaScript (variables & functions)
// Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

// So in previous lecture, we learnt that execution context gets created in two phase, so even before code execution, memory is created so in case of variable, it will be initialized as undefined while in case of function the whole function code is placed in the memory.

// lecture-2 (came to basic again!)
// in case of variable -> undefined
// in case of function -> whole funciton is stored

// case-1
getName(); // Namaste Javascript
console.log(x); // undefined
var x = 7;
function getName() {
  console.log("Namaste Javascript");
}

// case-2
getName(); // Namaste JavaScript
console.log(y); // Uncaught Reference: x is not defined.
console.log(getName1); // f getName(){ console.log("Namaste JavaScript); }
function getName1() {
  console.log("Namaste JavaScript");
}

// case-3
// in case of arrow function, js engine treat as normal varible not function
// in case of arrow function store the undenfined!

getName2(); // Uncaught TypeError: getName is not a function
console.log(getName2);
var getName2 = function () {
  console.log("Namaste JavaScript");
};
