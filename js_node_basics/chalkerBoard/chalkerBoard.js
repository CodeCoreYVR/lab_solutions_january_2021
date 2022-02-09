const chalk = require("chalk");
// Skip first 2 elements from `process.argv` and assign remaining 3 elements
// to variables: colour, width and height.
const [, , colour, width, height] = process.argv;

// Generate an array with the length of (width * height)
const arr = Array.from({ length: width * height });

// Put colour block or white space in the new array depends on the index
const arrayWithData = arr.map((element, index) => {
    if ((index + 1 + (width % 2 == 0 ? Math.floor(index / width) : 0)) % 2 === 0) {
        return chalk.bgKeyword(colour)(" ");
    } else {
        return " "
    }
});

// using reduce to combine all the element together but also check if need to add \n
const result = arrayWithData.reduce((previousElement, currentElement, i) => {
    if ((i + 1) % width === 0) {
        return previousElement + currentElement + "\n"
    } else {
        return previousElement + currentElement
    }
});

console.log(result);



//// Or chain the functions

// const board = Array.from({ length: width * height })
//     .map((v, i) => (i + 1 + (width % 2 == 0 ? Math.floor(i / width) : 0)) % 2 === 0
//         ? chalk.bgKeyword(colour)(" ")
//         : " ")
//     .reduce((pre, current, i) => (i + 1) % width === 0 ? pre + current + "\n" : pre + current);
// console.log(board);