import fs from "fs/promises"

const INPUT = await fs.readFile("./input.txt", { encoding: "utf-8" })

function isStringNice(string) {
  const VOWELS = [..."aeiou"]
  const BAD_STRINGS = ["ab", "cd", "pq", "xy"]

  let containsBadString = BAD_STRINGS.some(BS => string.includes(BS)) === true;

  if (containsBadString) return false;

  let vowelsCount = false;
  let letterThatAppearsTwiceInARow = false;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const nextChar = string[i + 1] ?? "";

    if (VOWELS.includes(char)) vowelsCount++

    if (char === nextChar) letterThatAppearsTwiceInARow = true;

    // early break if conditions are met
    if (letterThatAppearsTwiceInARow && vowelsCount >= 3) return true;
  }

  return false;
}

function calculateNumberOfNiceStrings(input = INPUT) {
  const arrOfInputs = input.split("\r\n").map(inp => isStringNice(inp));

  return arrOfInputs.filter(v => v).length
}

console.log(calculateNumberOfNiceStrings(INPUT));