var quizArray = [["How old is JavaScript?", "25"],
                 ["How old is Reactjs", "3"],
                 ["How old is SQL?", "50"]
                ]

var correctArray = [];
var wrongArray = [];

var correct = 0;
var wrong = 0;

function print(message) {
  document.write(message);
}

for (var i = 0; i < 3; i += 1) {
  var question = prompt(quizArray[i][0]);
  if (question === quizArray[i][1]) {
    correct += 1;
    correctArray = correctArray.concat(quizArray[i][0]);
  } else {
    wrong += 1;
    wrongArray = wrongArray.concat(quizArray[i][0]);
  }
}

document.write("You got " + correct + " question(s) right");
document.write("<h2>You got these questions correct:</h2>");

document.write("1. " + correctArray);

document.write("You got " + wrong + " question(s) wrong");
document.write("<h2>You got these questions wrong:</h2>");

document.write("1. " + wrongArray);
