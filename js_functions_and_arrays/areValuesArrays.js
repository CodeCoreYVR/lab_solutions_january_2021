function allIsArray(arr) {
    for (let a of arr) {
        if (!Array.isArray(a)) {
            return 'false'
        }
    }
    return 'true';
}

console.log(allIsArray([[1], 2, [6, 7, 8], [], [], []]))