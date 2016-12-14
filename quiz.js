/*
This simple quiz uses several if statements and asks
the user five JavaScript fun fact questions.
It will keep track of the total amount of questions answered correctly,
letting the user know at the end of the quiz how many were right
and assign the equivalent score and rank.
*/
//Keep count of the correct answers
var correctAnswer = 0;

//Initial rank value
var rank = "";

//Ask the user the questions
var questionOne = parseInt(prompt("When was JavaScript invented?"));
var questionTwo = prompt("Is NaN a number type?");
var questionThree = parseInt(prompt("How many days was JavaScript designed in?"));
var questionFour = prompt("Is NULL an object?");
var questionFive = prompt("Is NaN === NaN true or false?");

//Check the questions agaisnt right answers
if (questionOne === 1995) {
    correctAnswer += 1;
}

if (questionTwo.toUpperCase === "YES") {
    correctAnswer += 1;
}

if (questionThree === 10) {
    correctAnswer += 1;
}

if (questionFour.toUpperCase === "YES") {
    correctAnswer += 1;
}

if (questionFive.toUpperCase === "FALSE") {
    correctAnswer += 1;
}

//Assign the correct rank based on number of right answers
if (correctAnswer == 5) {
    rank = "and achieved the gold crown";
} else if (correctAnswer >= 3 && correctAnswer <= 4) {
    rank = "and achieved the silver crown";
} else if (correctAnswer >= 1 && correctAnswer <= 2) {
    rank = "and achieved the bronze crown";
} else {
    rank = "and did not achieve a crown";
}

document.write("You answered " + correctAnswer + " correctly " + rank);
