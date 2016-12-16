/*
Generate a random number between two values, 
both values are passed by calling the function.
Nested If will check if either value is NaN.
*/

//Generates a random result between two values like a dice.
function generator(lower, upper) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error("Not a number");
  } else {
     var result = Math.floor(Math.random() * (upper - lower + 1)) + lower; 
    return result
  }
}

console.log(generator(1,10));



