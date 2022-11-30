// Assignment code here

function getRandomNumber(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

function generatePassword() {

var numbers = [0,1,2,3,4,5,6,7,8,9]
var upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChars = ['!','@','#','$','`','%','^','&','*','?','(',')','{','}','[',']','|','-','+','=','~'];

//Prompt user for password length
var passwordLength = prompt("Please enter the password length: (must be a number between 8 and 128 inclusive)");

//validate user input
if (!(passwordLength >= 8 && passwordLength <=128)) {
    alert("Please enter a valid number for password length");
    return;
}

//Prompt user to choose whether to include uppercase characters
var includeUpperCaseChar = prompt("Include an uppercase character? (Please enter Y or N)");

//validate user input
if (includeUpperCaseChar != "Y" && includeUpperCaseChar != "N") {
  alert("Please enter either 'Y' or 'N' when asked whether to include an uppercase character");
  return;
}

//Prompt user to choose whether to include lowercase characters
var includeLowerCaseChar = prompt("Include a lowercase character? (Please enter Y or N)");
//validate user input
if (includeLowerCaseChar != "Y" && includeLowerCaseChar!= "N") {
  alert("Please enter either 'Y' or 'N' when asked whether to include an lowercase character");
  return;
}

//Prompt user to choose whether to include numeric characters
var includeNumericChar = prompt("Include a numeric character? (Please enter Y or N)");

//validate user input
if (includeNumericChar != "Y" && includeNumericChar != "N") {
  alert("Please enter either 'Y' or 'N' when asked whether to include an numeric character");
  return;
}

//Prompt user to choose whether to include special characters
var includeSpecialChar =  prompt("Include a special character? (Please enter Y or N)");
//validate user input
if (includeSpecialChar != "Y" && includeSpecialChar != "N") {
  alert("Please enter either 'Y' or 'N' when asked whether to include an special character");
  return;
}

//validate user input 
if (includeUpperCaseChar === 'N' && includeLowerCaseChar === 'N' && includeNumericChar === 'N' && includeNumericChar === 'N') {
  alert("Please answer 'Y' for at least one criteria");
  return;
}


//generate random password
var randomPwd = "";

for (var i=0; i<=parseInt(passwordLength, 10); i++) {

var randomNumber = 0;
var uppercaseCharsLength = upperCaseChars.length;
var numbersLength = numbers.length;
var lowercaseCharsLength = upperCaseChars.length;
var specialCharsLength = specialChars.length;

if (parseInt(randomPwd.length, 10) === parseInt(passwordLength, 10)) {
  break;
}

  if (includeUpperCaseChar === 'Y') {
    randomNumber = getRandomNumber(uppercaseCharsLength);
    randomPwd += upperCaseChars[randomNumber];

  }

  if (parseInt(randomPwd.length, 10) === parseInt(passwordLength, 10)) {
    break;
  }


  if (includeLowerCaseChar === 'Y') {
    randomNumber = getRandomNumber(lowercaseCharsLength);
    randomPwd += upperCaseChars[randomNumber].toLowerCase();
  }

  if (parseInt(randomPwd.length, 10) === parseInt(passwordLength, 10)) {
    break;
  }

  if (includeNumericChar === 'Y') {
    randomNumber = getRandomNumber(numbersLength);
    randomPwd += numbers[randomNumber];
  }

  if (parseInt(randomPwd.length, 10) === parseInt(passwordLength, 10)) {
    break;
  }

  if (includeSpecialChar  === 'Y') {
    randomNumber = getRandomNumber(specialCharsLength);
    randomPwd += specialChars[randomNumber];
  }

  if (parseInt(randomPwd.length, 10) === parseInt(passwordLength, 10)) {
    break;
  }


}

console.log(randomPwd);
return randomPwd;

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