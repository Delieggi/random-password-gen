// Assignment Code
var generateBtn = document.querySelector("#generate");

// My portion (everything between lines 4-26 is me)
// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCase = ["A", "B", "C"]
// var numbers = "0123456789";
var numbers = ["0", "1", "2"];
// var characters = "~!@#$%^&*()_-+/?><";
var characters = ["~", "!", "@"]

function generatePassword() {

  //write prompts for user to select what they want in password, need at least 1, yields a boolean true/false
  let answer1 = prompt("Choose a password length between 8 and 128 characters.");
  console.log(answer1);
  console.log(typeof answer1);
  var passwordLength = Number(answer1);
  console.log(typeof passwordLength);
 // https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript

  // console.log(isNaN(answer1))
  // if (isNaN(answer1)) {
  //   alert("Please pick a number instead")
  //   return "Try again";
  // }
  if (answer1 < 8 || answer1 > 128) {
    alert("number is less than 8, or greater than 128")
    return "Try again";
  }
  let answer2 = confirm("Should I include lower case letters?");
  let answer3 = confirm("Should I include upper case letters?");
  let answer4 = confirm("Should I include special characters?");
  let answer5 = confirm("Should I use include numbers?");
  
 
function forLoop1() {
  if (answer2);
  for (let i = 0; i < lowerCase.length; i++) {
    // random = [];
    var result = Math.floor(Math.random() * lowerCase);
  }
  console.log(result);
  console.log(typeof result);
  return result;
}
  
forLoop1();

  // //look up math.Random
  // for (let i = 0; i < answer1; i++) {
  //   var result = Math.floor(Math.random() * listOfChoices.answer1);
  // }
  // console.log(result);
  // console.log(typeof result);
  // return result;
 
  

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


