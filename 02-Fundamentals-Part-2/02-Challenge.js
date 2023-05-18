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
console.log(`John has the higher BMI with ${(johnBMI)}, where as Mark has a BMI of ${markBMI}`)