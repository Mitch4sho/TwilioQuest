function scan(arrayOS) {
    let contraband = 0;
    for (let i = 0; i < arrayOS.length; i++) {
        let string = arrayOS[i];
        if (string != 'contraband') {
            console.log('Your Good :)');
        } else {
            contraband++;
            console.log('found one Al, contraband count: ' + contraband);
        };
    };
    return contraband;
}