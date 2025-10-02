// Larger or Smaller
// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. 
// Don’t forget to handle the fact that the two could be equal.

let intNumOne = parseInt(prompt("Enter the first integer:"));
let intNumTwo = parseInt(prompt("Enter the second integer:"));

let message;
switch  (true) {
    case (intNumOne > intNumTwo):
        message = `${intNumOne}.`;
        break;
    case (intNumTwo > intNumOne):
        message = `${intNumTwo}.`;
        break;
    default:
        message = "Both numbers are equal.";
        break;
}

document.write(message)
