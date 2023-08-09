// Assignment Code
var generateBtn = document.querySelector("#generate");

// My portion (everything between lines 4-40 is me)
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
var upperCase = ["A", "B", "C", "D", "E"]
var passwordArray = [];


function generatePassword() {

  //write prompts for user to select what they want in password, need at least 1, yields a boolean true/false
  let answer1 = prompt("Choose a password length between 8 and 128 characters.");
  console.log(answer1);
  console.log(typeof answer1);
  var passwordLength = Number(answer1);
  console.log(typeof passwordLength);
 // https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript

  console.log(isNaN(answer1))
  if (isNaN(answer1)) {
    alert("Please pick a number instead")
    return "Try again";
  }
  if (answer1 < 8 || answer1 > 128) {
    alert("number is less than 8, or greater than 128")
    return "Try again";
  }
  let answer2 = confirm("Should I include lower case letters?");
 
  if (answer2) {
    passwordArray = passwordArray.concat(lowerCase);
    console.log(passwordArray);
  }

  //credit to stack overview for help with for loop syntax structure: https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array
  var finalPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    finalPassword += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }


  console.log(finalPassword);
  console.log(typeof finalPassword);
  return finalPassword;


}


  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


