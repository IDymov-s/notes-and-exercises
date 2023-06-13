"use strict";

// JS reduce() exercise template
const shoppingCart = require("./mockData.js").data;

// Your code here
const totalPrice = shoppingCart.reduce((fValue, { price, quantity }) => {
  return fValue + price * quantity;
}, 0);

console.log(totalPrice);
