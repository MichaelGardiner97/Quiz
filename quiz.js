/*
Ask at least 5 questions.
Keep track of how many questions the user got right.
Message how many s/he got right.
Rank player: 
    5 = gold. 3-4 = silver. 1-2 = bronze. 0 = none.
*/

var correct = 0;

//Questions:
var numA = prompt("I am thinking of a number between 1 and 10. What is the number I am thinking of?");
if (numA === Math.floor(Math.random() * 10 ) + 1) {
    alert('Correct!');
    correct += 1;
} else {
    alert('Wrong!');
} 

var colA = prompt("Is my favorite color purple or blue?");
if (colA.toUpperCase()==="PURPLE") {
    alert('Correct!');
    correct += 1;
} else {
  alert('Wrong!');  
} 

var petA = prompt("Is my dog's name Logan Murphy or Spike?");
if (petA.toUpperCase() === "LOGAN") {
    alert('Correct!');
    correct += 1;
} else {
    alert('Wrong!');
}

var ageA = prompt("How old am I?");
if (ageA === "19") {
    alert('Correct!');
    correct += 1;
} else {
    alert('Wrong!');
} 

var liveA = prompt("Where do I live?");
if (liveA.toUpperCase()=== "NEW YORK CITY" || liveA.toUpperCase() === "NEW YORK" || liveA.toUpperCase() === "NYC") {
    alert('Correct!');
    correct += 1;
} else {
    alert('Wrong!');
} 

//Results:
document.write("You got " + correct + " out of 5 questions correct. ");

//Ranking:
if (correct == 5) {
    document.write("You earned a gold crown!");
} else if (correct >= 3) {
    document.write("You earned a silver crown!");
} else if (correct >= 1) {
    document.write("You earned a bronze crown!");
} else {
    document.write("No crown for you! Try again!");
}