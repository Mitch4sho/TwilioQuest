const plantLife = process.argv[2];
const dryness = process.argv[3];


if (plantLife == 0) {
    if (dryness >= 11) {
        console.log('WATER');
    }
}