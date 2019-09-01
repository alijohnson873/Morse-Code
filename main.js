const engToMorseKey = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": "/"
};

const engToMorseForm = document.getElementById("engToMorseForm");
const morseToEngForm = document.getElementById("morseToEngForm");
const engInput = document.getElementById("engInput");
const morseInput = document.getElementById("morseInput");
const translationOutput = document.getElementById("translationOutput");
const h1Test = document.getElementById("h1Test");

const letterToMorse = letter => {
  return engToMorseKey[letter];
};
const wordToMorse = word => {
  let morse = "";
  for (let i = 0; i < word.length; i += 1) {
    morse += letterToMorse(word.charAt(i)) + " ";
  }
  return morse;
};

const morseToLetter = (object, morseLetter) => {
  return Object.keys(object).find(key => object[key] === morseLetter);
};
const splitStringBySpace = string => {
  return (arr = string.split(" "));
};

const morseToWord = morse => {
  let morseArr = splitStringBySpace(morse);
  let wordArr = [];
  for (let i = 0; i < morseArr.length; i += 1) {
    wordArr.push(morseToLetter(engToMorseKey, morseArr[i]));
  }
  return wordArr.join("");
};

engToMorseForm.addEventListener("submit", event => {
  event.preventDefault();
  console.log(engInput.value);
  translationOutput.innerText = wordToMorse(engInput.value.toLowerCase());
  engInput.value = "";
});

morseToEngForm.addEventListener("submit", event => {
  event.preventDefault();
  console.log(morseInput.value);
  translationOutput.innerText = morseToWord(morseInput.value);
  morseInput.value = "";
});

// export { letterToMorse, wordToMorse, morseToWord, morseToLetter };
