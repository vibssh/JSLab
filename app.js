/*global window, console*/
(function (window, document, console) {
  'use strict';

  // Creating an Animal Object
  var animal = {};

  //Assign a property of userName to the newly created object using dot notation
  animal.userName = 'Kitten';
  console.info(animal.userName); // console logging the data

  //Assign a property of tagline to the same animal object using bracket notation
  animal['tagline'] = 'Proud to be a part of Cat Family';
  console.info(animal.tagline); // console logging the data

  //Add another property to the animal object this time its an array
  var noises = [];
  animal.noises = noises;
  console.info(animal); // console logging the data

  // Count the property attached to the object and loop through them and output the values
  var count = 0,
    prop;
  // For in loop
  for (prop in animal) {
    count += 1;
    console.info(count);

    //If property of an object is userName print 'I am proud of being a Kitten'
    if (prop === 'userName') {
      console.info('I am proud of being ' + animal.userName);
    } else if (prop === 'tagline') {
      console.info('I am ' + animal.tagline);
    }

  }

}(window, document, console));

/* Redifing how variables are declared - https://github.com/airbnb/javascript#types */

const myStack = ['test-1', 'test-2', 'test-3'];
const l = myStack.length;
//myStack[l] = "test-4";  
// adding to last
myStack.push('test-4');
//adding to first
myStack.unshift('test-a');
//remove last
myStack.pop();
//remove first
myStack.shift();

//Find index of 'test-2'
const i = myStack.indexOf('test-2');
myStack.splice(i, 1);

// Template curly bracket spacing IMPORTANT: they are not inverted commas they are back ticks 
function sayHi(name) {
  console.info(`Hello, how are ,${name}?`);
};
sayHi("Leo");

//Immdiately invoked functions 
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());

//Accessing Properties using dot notation
const luke = {
  jedi: true,
  age: 28
};

const isJedi = luke.jedi;
console.info(isJedi);

// Object method shorthand
const atom = {
  Value: 1,

  greetings: {
    greeting: {
      hindi: 'namastey',
      english: 'hello'
    },

    name: {
      uk: 'Leo',
      in: 'Vaibhav'
    }

  },

  addValue(value) {
    return atom.Value + value;
  },

  sayHello(name) {
    if (name === 'leo') {
      console.log(`${name} greetings says ${atom.greetings.english}`);
    } else if (name === 'vaibhav') {
      console.log(`${name} greetings says ${atom.greetings.hindi}`);
    }
  }

};
console.info('This is the addValue function returned value ' + atom.addValue(2));
console.info('This is the greetings returned value ' + atom.greetings);
console.info('This is the greetings greeting returned value ' + atom.greetings.greeting.hindi + atom.greetings.greeting.english);

// Property value shorthand
const me = 'leo';
const name = {me};
console.info(name);

//Array. Use literal Syntax for creating arrays
const items = [];
console.info(items);

// Array. Use Array push to add items to array
items.push('hello world');
console.info(items);

// Array. use array spreads ... to copy arrays
const itemsCopy = [...items];
console.info(itemsCopy);

// Functions
function foo(name){
  console.info(`Hello Mr.${name}`);
};
console.info(foo('Chang'));