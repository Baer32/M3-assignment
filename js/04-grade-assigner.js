// The “Grade Assigner” Application

//     Collect the a number between 1 and 100 from the user.
//     Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.


let grade = parseInt(prompt("Enter a number between 1 and 100:"));

if (grade < 1 || grade > 100 || isNaN(grade)) {
    console.write("Only numbers between 1 and 100 are accepted.");
}
else {
    switch (grade) {
        case (grade >= 90):
            console.write("You received an A")
            break
        case (grade >= 80):
            console.write("You received a B")
            break
        case (grade >= 70):
            console.write("You received a C")
            break
        case (grade >= 60):
            console.write("You received a D")
            break
        default:
            console.write("You received an F")
            break
    }
}