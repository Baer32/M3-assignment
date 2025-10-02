// The “Grade Assigner” Application

// Collect the a number between 1 and 100 from the user.
// Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
// If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.

let grade = parseInt(prompt("Enter a number between 1 and 100:"));

if (grade < 1 || grade > 100 || isNaN(grade)) {
    console.log("Only numbers between 1 and 100 are accepted.");
}
else {
    switch (grade) {
        case (grade >= 90):
            console.log("You received an A")
            break
        case (grade >= 80):
            console.log("You received a B")
            break
        case (grade >= 70):
            console.log("You received a C")
            break
        case (grade >= 60):
            console.log("You received a D")
            break
        default:
            console.log("You received an F")
            break
    }
}