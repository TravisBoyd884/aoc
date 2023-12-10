import fs from "fs";
const lines = fs.readFileSync(file, "utf-8").trim().split("\n");

const wordNumbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function partOne(file) {
  const values = lines.map((line) => {
    let first = line.split("").find((v) => !Number.isNaN(Number(v)));
    let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));
    return Number(first + last);
  });

  return values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
}

function partTwo() {}

console.log(partOne("./input.txt"));
