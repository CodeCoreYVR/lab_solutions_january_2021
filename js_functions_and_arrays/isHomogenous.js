function isHomogenous(arr) {
    let type = typeof arr[0];
    if (type === 'object') {
        if (arr[0] === null) {
            type = 'null'
        } else if (Array.isArray(arr[0])) {
            type = 'array'
        }
    }
    for (const element of arr) {
        let elementType = typeof element;
        if (elementType === 'object') {
            if (element === null) {
                elementType = 'null'
            } else if (Array.isArray(element)) {
                elementType = 'array'
            }
        }
        if (elementType !== type) {
            return false;
        }
    }
    return true;
}
