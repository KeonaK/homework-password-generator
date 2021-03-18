let upperSelection = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowerSelection = ["a", "b", "v", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numberSelection = [ 0,1, 2, 3, 4, 5, 6, 7, 8, 9 ];

let specialCharSelection = ["," , "!", "#","$", "%", "&" ,"*" ,   "+", "-" , ".", "/", ":", ";" , "<" , "=", "?" , "@","^","_" ,"~"];
// will need to concat the above list into a new variable 
// Assignment Code

var generateBtn = document.querySelector("#generate");

//creating the generate password function
function generatePassword () {

  passwordLength = prompt("Please choose a number from 8 to 128 for your password character length");

if( isNaN(passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {

  alert("Try again");
  
};


let upperChoice = confirm("Would you like uppercase letters in your password? ");

let lowerChoice = confirm("Would you like lowercase letters in your password? ");

let numberChoice = confirm("Would you like numbers in your password? ");

let specialChoice = confirm("Would you like special characters in your password? ");





// for (let index = 0; index < passwordLength; index++) {
//   const element = array[index];
  
// }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // calls the generatePassword function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
