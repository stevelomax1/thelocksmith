const specialCharacters = "@%+\\/'!#$^?:,)(}{][~-_.".split("");
const numericCharacters = "0123456789".split("");
const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


// Get references to the #generate element and add event listener using const
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  document.querySelector("#password").value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
