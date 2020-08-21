// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*It can access the variable because variables declared outside of a function are within that function's scope. But if 'internal' was declared within 'nestedFunction', then 'myFunction' wouldn't have direct access to 'internal'.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const summation = num => {
  let count = 0;
  for (let i = num; i >= 1; i--) {
    count += i;
  }
  return count;
}
console.log(summation(4))