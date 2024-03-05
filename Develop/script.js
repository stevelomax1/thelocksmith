const specialCharacters = "@%+\\/'!#$^?:,)(}{][~-_.".split("");
const numericCharacters = "0123456789".split("");
const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Function to prompt user for password options using template literals and arrow function
const getPasswordOptions = () => {
  const length = parseInt(
    prompt("How many characters would you like your password to contain?"),
    10
  );

  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  }
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return null;
  }

  const hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  const hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );
  const hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );
  const hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  if (
    !hasSpecialCharacters &&
    !hasNumericCharacters &&
    !hasLowerCasedCharacters &&
    !hasUpperCasedCharacters
  ) {
    alert("Must select at least one character type");
    return null;
  }

  return {
    length,
    hasSpecialCharacters,
    hasNumericCharacters,
    hasLowerCasedCharacters,
    hasUpperCasedCharacters,
  };
};


const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate password with user input
const generatePassword = () => {
  const options = getPasswordOptions();
  if (!options) return null;

  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];

  // Using destructuring to improve readability
  const {
    hasSpecialCharacters,
    hasNumericCharacters,
    hasLowerCasedCharacters,
    hasUpperCasedCharacters,
  } = options;

  if (hasSpecialCharacters) {
    possibleCharacters = [...possibleCharacters, ...specialCharacters];
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (hasNumericCharacters) {
    possibleCharacters = [...possibleCharacters, ...numericCharacters];
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (hasLowerCasedCharacters) {
    possibleCharacters = [...possibleCharacters, ...lowerCasedCharacters];
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (hasUpperCasedCharacters) {
    possibleCharacters = [...possibleCharacters, ...upperCasedCharacters];
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (let i = 0; i < options.length; i++) {
    result.push(getRandom(possibleCharacters));
  }

  // Mix in at least one of each guaranteed character in the result
  guaranteedCharacters.forEach((char, index) => (result[index] = char));

  return result.join("");
};

// Get references to the #generate element and add event listener using const
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  document.querySelector("#password").value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
