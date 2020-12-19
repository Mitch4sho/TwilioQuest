const testArray = [1,2,3];

function calculatePower(params) {
 const allMultiplyItems =[]
 let together

    params.forEach((item)=>{
        let multiply = item * 2;
        allMultiplyItems.push(multiply);
    })

     for (let i = 0; i < allMultiplyItems.length; i++){
            together = allMultiplyItems[i] + allMultiplyItems[allMultiplyItems.length - 1]
        }
    return together;
};

calculatePower(testArray);