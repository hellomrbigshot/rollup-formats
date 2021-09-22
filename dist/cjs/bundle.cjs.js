'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Increase the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be added
 * @returns {number} The new total value
 */
 const increase = (total, value) => total + value;

/**
 * Decrease the current total value
 * @param {number} total The current total value
 * @param {number} value The new value to be subtracted
 * @returns {number} The new total value
 */
 const decrease = (total, value) => total - value;

var others = {
  a: 1,
  b: 2,
  c: () => 3,
};
const e = 5;

/**
 * This is the main file
 */
 
 function multiply(total, value) {
   return total * value;
 }
 
 function power(total, value) {
   return total ** value;
 }
 
 let total = others.a;
 
 total = increase(total, 10);
 total = increase(total, 20);
 total = decrease(total, 5);
 total = multiply(total, e);
 
 console.log(`Total is ${total}`);

exports.power = power;
