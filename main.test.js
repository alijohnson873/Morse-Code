const letterToMorse = require("./main");

test("take in the letter A and out put .- ", () => {
  expect(morseToLetter("a")).toBe(".-");
});

test("take in the morse code --.. and out put Z ", () => {
  expect(letterToMorse("--..")).toBe("z");
});

test("take in the word cat and out put -.-..-- ", () => {
  expect(letterToMorse("cat")).toBe("-.-..--");
});

test("take in the morse -..-----. and out put the word dog", () => {
  expect(morseToLetter("-..-----.")).toBe("dog");
});
