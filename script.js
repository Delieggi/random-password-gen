// Assignment Code
var generateBtn = document.querySelector("#generate");

// My portion
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var characters = "~!@#$%^&*()_-+/?><";

function generatePassword() {

  //write prompts for user to select what they want in password, need at least 1
  let answer1 = confirm("Should I include lower case letters?");
  let answer2 = confirm("Should I include upper case letters?");
  let answer3 = confirm("Should I include special characters?");
  let answer4 = prompt("Choose a password length between 8 and 128 characters.");
  //how do I validate their option?

  //password gen
  var genPassword = " ";
    genPassword += upperCase[Math.floor(Math.random)];
    genPassword += lowerCase[Math.floor(Math.random)];
    genPassword += numbers[Math.floor(Math.random)];
    genPassword += characters[Math.floor(Math.random)];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


