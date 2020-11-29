function scan(freightItems) {
    let contrabandIndex = [];
    for (let i = 0; i < contrabandIndex.length; i++) {
        let string = contrabandIndex[i];
        if (string != 'contraband') {
            console.log('no contraband');
        } else {
            var indexNumber = freightItems.indexOf(i);
            contrabandIndex.push(indexNumber);
        };
    };
    return contrabandIndex;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes);