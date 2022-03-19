// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = 'asdfgojkl'
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 

}
Math.random(password)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);