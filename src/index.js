/**
 * This is the main file
 */
 import { increase } from './increase';
 import { decrease } from './decrease';
 import others, { e } from './others';
 
 function multiply(total, value) {
   return total * value;
 }
 
 function divide(total, value) {
   return total / value;
 }
 
 export function power(total, value) {
   return total ** value;
 }
 
 let total = others.a;
 
 total = increase(total, 10);
 total = increase(total, 20);
 total = decrease(total, 5);
 total = multiply(total, e);
 
 console.log(`Total is ${total}`);
