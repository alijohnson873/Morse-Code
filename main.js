const morseKey = {
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

//Word to Morse
const letterToMorse = letter => {
  return morseKey[letter];
};
const wordToMorse = word => {
  let morse = "";
  for (let i = 0; i < word.length; i += 1) {
    morse += letterToMorse(word.charAt(i)) + " ";
  }
  return morse;
};

//Morse to Word
const morseToLetter = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
};
const splitString = string => {
  return (arr = string.split(" "));
};

const morseToWord = morse => {
  let morseArr = splitString(morse);
  let wordArr = [];
  for (let i = 0; i < morseArr.length; i += 1) {
    wordArr.push(morseToLetter(morseKey, morseArr[i]));
  }
  return wordArr.join("");
};

// console.log(morseToLetter(morseKey, "--.."));

module.exports = letterToMorse;
