// Larger or Smaller
// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. 
// Don’t forget to handle the fact that the two could be equal.

let intNumOne = parseInt(prompt("Enter the first integer:"));
let intNumTwo = parseInt(prompt("Enter the second integer:"));
let message;

if (Number.isInteger(intNumOne) === true && Number.isInteger(intNumTwo) === true) {    
    switch  (true) {
        case (intNumOne > intNumTwo):
            message = `${intNumOne}`;
            break;
        case (intNumTwo > intNumOne):
            message = `${intNumTwo}`;
            break;
        default:
            message = "Both numbers are equal.";
            break;
    }
}
else {
    message = "Invalid input. Please enter valid integers.";
}

document.write(message)
