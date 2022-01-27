function largestNum(arr) {
    // ...arr => 40, 2, 13, 34, 42 
    console.log(Math.max(...arr))

}

largestNum([40, 2, 13, 34, 42])



function largestNumber(arr) {
    let Max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        Max = Max > arr[index] ? Max : arr[index];
    }
    console.log(Max)
    return Max;
}


