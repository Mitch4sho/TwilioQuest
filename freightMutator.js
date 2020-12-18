let array = ['apples', 'ray guns', 'oranges'];

function mutate(params) {
   const mutation = params.map(
       x => x.toUpperCase()
    )
       return mutation;
}

mutate(array) 