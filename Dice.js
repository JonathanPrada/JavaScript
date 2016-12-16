/*
Generate a random number between two values, 
both values are passed by calling the function.
*/

//Generates a random result between two values like a dice.
function generator(lower, upper) {
  var result = Math.floor(Math.random() * (upper - lower + 1)) + lower; 
  return result
}

alert(generator(1,6));
