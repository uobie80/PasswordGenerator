// Assignment code here


function validateChoices(choice, criteria) {
  var result = false;

  if (criteria === 'Password Length') {
    if (choice >= 8 && choice <= 12) {
      result = true;
    }
  }

}


function getUserInput() {

var criteriaMet = false;
var passwordLength = prompt("Please enter the password length: (must be a number between 8 and 12 inclusive)");
var numOfUpperCaseCharacters = prompt("Please enter the number of upper case characters.");
var numOfLowerCaseCharacters = prompt("Please enter the number of lower case characters.");
var numOfSpecialCharacters = prompt("Please enter the number of special characters");

console.log(passwordLength);
console.log(numOfUpperCaseCharacters);
console.log(numOfLowerCaseCharacters);
console.log(numOfSpecialCharacters);

criteriaMet = validateChoices(passwordLength, 'Password Length');
criteriaMet = validateChoices(numOfUpperCaseCharacters, 'UpperCase');
criteriaMet = validateChoices(numOfLowerCaseCharacters, 'LowerCase');
criteriaMet = validateChoices(numOfSpecialCharacters, 'SpecialChar');


}


function displayPasswordRules() {
  var choice = confirm("Password must contain the following:\n\
          1. At least 8 characters.\n\
          2. At least one uppercase letter.\n\
          3. At least one lowercase letter.\n\
          4. At least one special character.\n\
          5. At least one number. ");


  if (choice) {
    getUserInput();
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

displayPasswordRules();