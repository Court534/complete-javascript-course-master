// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Your tasks:
// 1. Calculate the average score for each team, using the test data above

// Data 1
let dolphinsAverage = 96 + 108 + 89 / 3;
let koalasAverage = 88 + 91 + 110 / 3;

// Bonus Data 1
// dolphinsAverage = 97 + 112 + 101 / 3
// koalasAverage = 109 + 95 + 123 / 3

// Bonus Data 2
// dolphinsAverage = 97 + 112 + 101 / 3
// koalasAverage = 109 + 95 + 106 / 3

console.log(dolphinsAverage);
console.log(koalasAverage);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

if (dolphinsAverage > koalasAverage) {
  console.log("Dolphins are the winners");
} else if (koalasAverage > dolphinsAverage) {
  console.log("Koalas are the winners");
} else {
  console.log("It's a draw!");
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphines are the winners!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas are the winners!");
} else {
  console.log("Its a draw!");
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphines are the winners!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas are the winners!");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("Its a draw!");
} else {
  console.log("Nobody wins!");
}