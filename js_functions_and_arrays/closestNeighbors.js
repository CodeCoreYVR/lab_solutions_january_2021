function closestNeighbors(n, a, b, c) {
    let smaller, bigger;
    let tempArr = [a, b, c].sort();
    //get the greatest integer smaller than n
    smaller = a * b * c / (EuclideanAlgorithm(tempArr[2], tempArr[1]) * EuclideanAlgorithm(tempArr[2], tempArr[0]) *
        EuclideanAlgorithm(tempArr[1], tempArr[0]));
    //get the smallest integer greater than n
    bigger = (parseInt(n / smaller) + 1) * smaller;
    return [smaller, bigger];
}

function EuclideanAlgorithm(a, b) {
    let temp;
    while (b != 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}
console.log(closestNeighbors(20, 2, 3, 4));
console.log(closestNeighbors(100, 3, 4, 5));
console.log(closestNeighbors(3000, 7, 13, 31));