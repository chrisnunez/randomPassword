// // Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Variables for lowercase, Uppercase, numbers, and special characters
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericCase = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialChar = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', ',', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}'];
 

  // Generates a password prompt when the red button is pressed.
function generatePassword() {

// First prompt when button is clicked
  var firstPrompt = prompt('Enter a password between 8-128 characters long');
  
  

// // Validates character prompt length and asks for next prompt
  if (firstPrompt.length >= 8 && firstPrompt.length <= 128 ) {
    var secondPrompt = confirm('Do you want to include an Uppercase letter?');
    var upperCaseAns = upperCase[(Math.floor(Math.random() * upperCase.length))];
    } else {
      alert('Your characters must be between 8 - 128 characters')
      return;
    }

// Lowercase prompt
    if (secondPrompt = true) {
      var lowcaseAns = lowerCase[Math.floor(Math.random() * lowerCase.length)];
      var thirdPrompt = confirm('Do you want to include a lowercase letter?');
    }

// Number prompt
    if (thirdPrompt = true){
      var fourthPrompt = confirm('Do you want to include a number?');
      var numAns = numericCase[Math.floor(Math.random() * numericCase)];
    }

// Special character prompt
    if (fourthPrompt = true){
      var fifthPrompt = confirm('Do you want to include a special character?');
      var spcAns = specialChar[Math.floor(Math.random() * specialChar.length)];
    }

  return(upperCaseAns + lowcaseAns + spcAns);


}
  
  
  
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password; 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password

// WHEN I click the button to generate a password


// Step 1: THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// Step 2: THEN I select which criteria to include in the password


// WHEN prompted for the length of the password
// Step 3: THEN I choose a length of at least 8 characters and no more than 128 characters


// WHEN asked for character types to include in the password
// Step 4: THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
// Step 5: THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered
// Step 6: THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// Step 7: THEN the password is either displayed in an alert or written to the page

