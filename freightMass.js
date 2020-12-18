

function calculateMass(params) {
   const items = params.map(x  => x.length)

    const mass = items.reduce(
        (sum, current) => sum + current, 0 
    )

    return mass;
}

let array = ['apples', 'ray guns', 'oranges']

calculateMass(array);