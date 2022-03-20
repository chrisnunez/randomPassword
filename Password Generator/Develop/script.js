// // Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Variables for lowercase, Uppercase, numbers, and special characters
  var lowerCase = 'zxcvbnmasdfghjklqwertyuiop';
  var upperCase = 'ZXCVBNMASDFGHJKLQWERTYUIOP';
  var numericCase = '1234567890'
  var specialChar = " !#$%&()*+,-./:;<=>?@[]^_{|}~"
  var allChar = lowerCase + upperCase + numericCase + specialChar;

// Function that generates a password prompt when the red button is pressed.
function generatePassword(){

// First prompt when button is clicked
  var charLength = prompt('Please choose between 8-128 characters');
  
  if (charLength.length >= 8 && charLength.length <= 128 ) {
    var charTypes = prompt('Include a lowercase, uppercase, numeric, and/or special characters');
    } else {
      alert('Your characters must be between 8 - 128 characters')
      
    }

if (allChar.search = ''){
  return
}
else {
  alert('You did not enter a special character')
}

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

