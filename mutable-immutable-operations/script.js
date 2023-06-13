"use strict";

console.log("HW");
/*
// JS mutable & immutable operations

// Mutable push()
console.log("----------- push --------------");
const cart = [];
console.log("cart: " + cart); // []
cart.push("cucumber"); // cucumber

// Immutable operation similar to push()
const newCart = [...cart, "banana"]; // Copy of cart and add banana
console.log("cart: " + cart); // cucumber (stays the same)
console.log(`newCart: ${newCart} \n`); // cucumber, banana

// Mutable pop()
console.log("----------- pop ---------------");
console.log("newCart: " + newCart); // cucumber, banana

// We remove the last item. We don't use the resulting value.
newCart.pop();
console.log("newCart: " + newCart); // cucumber

// Immutable operation similar to pop()
const latestCart = newCart.slice(0, newCart.length - 1); // = []
console.log("newCart: " + newCart); // cucumber (stays the same)
console.log("latestCart: " + latestCart); // []
*/

("use strict");

// JS mutable & immutable operations exercise solution

// Object
const car = {
  modelName: "Prius",
  brand: "Toyota",
  engineType: "Hybrid",
  wheels: 4,
  color: "red",
};

console.log(JSON.stringify(car));
/*
Add the property hasAirbag and change the property color to the car object using an immutable operation. Call the new object any name you’d like.

Log both objects to test if you have achieved the desired results.

Add a new tea to a new tea collection by using an immutable operation. 

Log both arrays to test if you have achieved the desired result.*/

// Your code here
const newCar = {
  ...car,
  hasAirbag: true,
  color: "black",
};

console.log(car);
console.log(newCar);

// Array
const teas = ["Rooibos tea", "Green tea", "Black tea"];

// Your code here
const newTeas = [...teas, "Killer Tea", "Deadly Tea", "Monster Tea"];

console.log(teas);
console.log(newTeas);

// Es sorprendente lo bien que funciona esto


