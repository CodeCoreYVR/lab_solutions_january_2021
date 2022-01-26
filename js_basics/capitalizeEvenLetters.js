const letters = process.argv[2];

let result = '';
// letters = fish  0  f  1  2  3


for (let i = 0; i < letters.length; i++) {
    // 0 f => 0 / 2 => 0 => lowercase
    // 1 i => 1 / 2 => 1 => uppercase
    // 2 s => 2 / 2 => 0 => lowercase
    // 3 h => 3 / 2 => 1 => uppercase
    if (i % 2 !== 0) {
        result = result + letters[i].toUpperCase()
    } else {
        result = result + letters[i].toLowerCase()
    }
}

console.log(result)
