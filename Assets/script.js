// element selector
const characterRangeEl = document.getElementById("characterRange");
const characterNumberEl = document.getElementById("characterNumber");
const formEl = document.getElementById("generatePasswordForm");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const passwordEl = document.getElementById("password");

// char code variables from ascii table
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96));
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);

// link slider with number input
characterRangeEl.addEventListener("input", syncSliderInput);
characterNumberEl.addEventListener("input", syncSliderInput);

function syncSliderInput(event) {
  const value = event.target.value;
  characterRangeEl.value = value;
  characterNumberEl.value = value;
}

// generate password
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const characters = characterNumberEl.value;
  const uppercase = uppercaseEl.checked; //checked tells us true or false if it is checked
  const numbers = numbersEl.checked;
  const symbols = symbolsEl.checked;
  const password = generatePassword(characters, uppercase, numbers, symbols);
  passwordEl.textContent = password;
});

// passing in character codes to get character, number and symbols output
function generatePassword(characters, uppercase, numbers, symbols) {
  let charCodes = LOWERCASE_CHAR_CODES;

  if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (numbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (symbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < characters; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  // turns the array into a string
  return passwordCharacters.join("");
}

// generates our array by looping through our high and low variables
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
