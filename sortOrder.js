const wordOne = process.argv[2].toLowerCase();
const wordTwo = process.argv[3].toLowerCase();
const words = [wordOne, wordTwo]

words.sort(function (a, b) {
    if (a > b) {
        console.log(-1);
    } else if (a >= b) {
        console.log(0);
    } else if (a < b) {
        console.log(1);
    }
});