// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

// these are kinda pointless I know, but it's just to simulate an async function
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { sum, subtract, sumAsync, subtractAsync };

// // This is what jest does
// let result = sum(3, 7);
// let expected = 10;

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }

// result = subtract(7, 3);
// expected = 4;

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
