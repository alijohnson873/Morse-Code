import { letterToMorse, wordToMorse, morseToWord, morseToLetter } from "./main";

test("take in the letter A and out put .- ", () => {
  expect(morseToLetter("a")).toBe(".-");
});

test("take in the morse code --.. and out put Z ", () => {
  expect(letterToMorse("--..")).toBe("z");
});

test("take in the word cat and out put -.-..-- ", () => {
  expect(wordToMorse("cat")).toBe("-.-..--");
});

test("take in the morse -..-----. and out put the word dog", () => {
  expect(morseToWord("-..-----.")).toBe("dog");
});
