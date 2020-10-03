function addFirstToLast(inputArray) {
    let output = '';
    var first = inputArray[0];
    var last = inputArray[inputArray.length - 1];
    if (inputArray.length > 0) {
        output = first + last;
    }
    // return a string
    return output;

}
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));