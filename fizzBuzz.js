const number = process.argv[2];


if (Number.isInteger(number / 5) && Number.isInteger(number / 3)) {
    console.log('JavaScript');
} else if (Number.isInteger(number / 3)) {
    console.log('Java');
} else if (Number.isInteger(number / 5)) {
    console.log('Script');
} else {
    console.log(number);
}