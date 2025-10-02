// Word Translator
// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
// If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
// If the user enters anything but those four language codes, the application should default to English. 
// The result should be (for example):
// Hello World translated in French is: Bonjour le monde

// could enforce lower case or trim spaces if desired, but we're keeping it simple
const code = prompt('Enter a language code ("es", "de", "en", "fr"): ');

let message;
if (code === 'es') {
    message = "Hola Mundo"
    lang = "Spanish"
}
else if (code === 'de') {
    message = "Hallo Welt"
    lang = "German"
}
else if (code === 'fr') {
    message = "Bonjour le monde"
    lang = "French"
}
else {
    message = "Hello World"
    lang = "English"
}
console.log(`Hello World translated in ${lang} is: ${message}`);