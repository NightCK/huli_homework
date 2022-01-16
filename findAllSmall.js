function findAllSmall(arr, num) {
    var result = []

    for(var n = 0; n < arr.length; n++) {

        if(arr[n] < num) {
            result.push(arr[n])
        }
    }

    console.log(result)
    return
}

findAllSmall([1, 2, 3], 10)
findAllSmall([1, 2, 3], 2) 
findAllSmall([1, 3, 5, 4, 2], 4)