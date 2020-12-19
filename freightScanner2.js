function scan (params) {
    let contrabandIndexes = [];

    params.forEach((item, index, array)=>{
        if (item == 'contraband') {
             contrabandIndexes.push(index);
        }
     
    });
    
    return contrabandIndexes
}

let items = ['contraband', 'apples', 'cats', 'contraband', 'contraband']

scan(items);