const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);

if ((a > b) && (a > c)) {
    console.log(`${a} is the biggest number`)
} else if ((b > a) && (b > c)) {
    console.log(`${b} is the biggest number`)
} else console.log(`${c} is the biggest number`)
