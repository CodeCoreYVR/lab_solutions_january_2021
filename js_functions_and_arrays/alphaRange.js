function alphaRange(start, end, step) {
    if (start !== end) {
        //Convert letters into ASCII Code.
        let startCode = start.charCodeAt(0);
        let endCode = end.charCodeAt(0);
        //Check if step has value or not.
        if (step === undefined || step === null || step === NaN)
            step = 1;
        let returnArr = [];
        //Use different way depents on the direction.
        if (startCode < endCode) {
            for (let i = startCode; i <= endCode; i += step) {
                //Convert code into letters and push it into the Array.
                returnArr.push(String.fromCharCode(i));
            }
        }
        else {
            for (let i = startCode; i >= endCode; i -= step) {
                //Convert code into letters and push it into the Array.
                returnArr.push(String.fromCharCode(i));
            }
        }
        return returnArr;
    }
    else {
        return "Please use two different letters!";
    }
}
console.log(alphaRange('a', 'f'));
console.log(alphaRange('f', 'a'));
console.log(alphaRange('a', 'k', 3));
console.log(alphaRange('z', 't', 2));