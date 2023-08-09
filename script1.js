// Assignment Code
var generateBtn = document.querySelector("#generate");

// My portion (everything between lines 4-40 is me)
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var passwordArray = [];


function generatePassword() {

  //write prompts for user to select what they want in password, need at least 1, yields a boolean true/false
  let answer1 = prompt("Choose a password length between 8 and 128 characters.");
  console.log(answer1);
  console.log(typeof answer1);
 
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
  let answer3 = confirm("Should I include upper case letters?");
  let answer4 = confirm("Should I use special characters?");
  let answer5 = confirm("Should I use numbers?");
 
  //concat method found on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  if (answer2) {
    passwordArray = passwordArray.concat(lowerCase);
    console.log(passwordArray);
  }
  if (answer3) {
    passwordArray = passwordArray.concat(upperCase);
    console.log(passwordArray);
  }
  if (answer4) {
    passwordArray = passwordArray.concat(special);
    console.log(passwordArray);
  }
  if (answer5) {
    passwordArray = passwordArray.concat(numbers);
    console.log(passwordArray);
  }

  //credit to stack overview for help with for loop syntax structure: https://stackoverflow.com/questions/43267033/understanding-the-use-of-math-floor-when-randomly-accessing-an-array
  //also referenced earlier tutoring session with Juan D., re making an empty string and adding elements to it.
  var finalPassword = "";
  for (let i = 0; i < answer1; i++) {
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


