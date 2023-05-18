// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Coding Challenge 1 code
// Data 1
let heightMark = 1.69
let weightMark = 78
let markBMI = weightMark / heightMark ** 2 
console.log(markBMI)

let heightJohn = 1.95
let weightJohn = 92
let johnBMI = weightJohn / heightJohn ** 2 
console.log(johnBMI)

markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI)

// Data 1
// heightMark = 1.88
// weightMark = 95
// markBMI = weightMark / heightMark ** 2 
// console.log(markBMI)

heightJohn = 1.76
weightJohn = 85
johnBMI = weightJohn / heightJohn ** 2 
console.log((johnBMI))

markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI)


// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (markBMI > johnBMI) {
    console.log("Mark has the higher BMI")
} else {
    console.log("John has the higher BMI")
}

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
if (markBMI > johnBMI) {
    console.log(`Mark has the higher BMI with ${(markBMI)}, where as John has a BMI of ${johnBMI}`)
} else {
    console.log(`John has the higher BMI with ${(johnBMI)}, where as Mark has a BMI of ${markBMI}`)
}


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
let dolphinsAverage = 96 + 108 + 89 / 3 
let koalasAverage = 88 + 91 + 110 / 3

// Bonus Data 1
// dolphinsAverage = 97 + 112 + 101 / 3 
// koalasAverage = 109 + 95 + 123 / 3

// Bonus Data 2
// dolphinsAverage = 97 + 112 + 101 / 3 
// koalasAverage = 109 + 95 + 106 / 3

console.log(dolphinsAverage)
console.log(koalasAverage)

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins are the winners")
} else if (koalasAverage > dolphinsAverage) {
    console.log("Koalas are the winners")
} else {
    console.log("It's a draw!")
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphines are the winners!")
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
	console.log("Koalas are the winners!")		
} else {
	console.log("Its a draw!")
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("Dolphines are the winners!")
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
	console.log("Koalas are the winners!")		
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
	console.log("Its a draw!")
} else {
	console.log("Nobody wins!")
}


