function getFirstAmountSorted(array, number) {
    // sort array in alphabet
    const newArray = array.sort();

    // return new array
    return newArray.slice(0, number);
}

console.log(getFirstAmountSorted(['third', 'second', 'first'], 2));