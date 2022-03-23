// // Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Variables for lowercase, Uppercase, numbers, and special characters
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericCase = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialChar = ['!', '#', '$', '%', '&', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '_', '{', '|', '}'];
  




  // Generates a password prompt when the red button is pressed.
function generatePassword() {

  // First prompt when button is clicked   *CHANGE TO BE A NUMBER
var firstPrompt = prompt('Choose the length of your password between 8-128 characters long. Use numbers.');



  // Validates character prompt length
if ( firstPrompt < 8 || firstPrompt > 128 ) {
      
  alert('Your characters must be between 8 - 128 characters');
  return;
}
      var secondPrompt = confirm('Do you want to include a lowercase letter?');
      var thirdPrompt = confirm('Do you want to include an Uppercase letter?');
      var fourthPrompt = confirm('Do you want to include a special character?');
      var fifthPrompt = confirm('Do you want to include a number?')

// Must include 1 before continuing 
 while (!secondPrompt && !thirdPrompt && !fourthPrompt && !fifthPrompt) {

          alert('Please select at least one')
      
          secondPrompt = confirm('Do you want to include a lowercase letter?');
          thirdPrompt = confirm('Do you want to include an Uppercase letter?');
          fourthPrompt = confirm('Do you want to include a special character?');
          fifthPrompt = confirm('Do you want to include a number?')

 }
// User chooses 4 prompts
 if (secondPrompt && thirdPrompt && fourthPrompt && fifthPrompt){
    var inputPassword = lowerCase.concat(upperCase, specialChar, numericCase);
    


// User chooses 3 prompts
 } else if (secondPrompt && thirdPrompt && fourthPrompt){
   
    var inputPassword = lowerCase.concat(upperCase, specialChar);

 } else if (secondPrompt && thirdPrompt && fifthPrompt){

    var inputPassword = lowerCase.concat(upperCase, numericCase);

 } else if (secondPrompt && fourthPrompt && fifthPrompt) {

  var inputPassword = lowerCase.concat(specialChar, numericCase);

 } else if (thirdPrompt && fourthPrompt && fifthPrompt) {

  var inputPassword = upperCase.concat(upperCase, numericCase);



// User chooses 2 prompts
 } else if (secondPrompt && thirdPrompt) {

  var inputPassword = lowerCase.concat(upperCase);

 } else if (secondPrompt && fourthPrompt) {

  var inputPassword = lowerCase.concat(specialChar);

 } else if (secondPrompt && fifthPrompt){

  var inputPassword = lowerCase.concat(numericCase);

 } else if (thirdPrompt && fifthPrompt){

  var inputPassword = upperCase.concat(numericCase);

 } else if (thirdPrompt && fourthPrompt) {

  var inputPassword = upperCase.concat(specialChar);

 } else if (fourthPrompt && fifthPrompt){

  var inputPassword = specialChar.concat(numericCase);




  // User chooses 1

 } else if (secondPrompt){

  var inputPassword = lowerCase;

 } else if (thirdPrompt){

  var inputPassword = upperCase;

 } else if (fourthPrompt) {

  var inputPassword = specialChar;

 } else if (fifthPrompt) {

 var inputPassword = numericCase;


 }

// Get the users' choice and randomizes and brings the choices together
 var realPassword = [];
 console.log(inputPassword);
 for (var i = 0; i < firstPrompt; i++) {

  var randomize = inputPassword[Math.floor(Math.random() * inputPassword.length)];

  realPassword.push(randomize);
  
 }


return realPassword.join("");

}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password; 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);