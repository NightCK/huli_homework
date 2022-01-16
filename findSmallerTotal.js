function findSmallerTotal(arr, num) {
    var result = 0 

    for(var n = 0; arr[n] < num; n++) {
        result += arr[n]
    }

    console.log(result)
    return
}

findSmallerTotal([1, 2, 3], 3)
findSmallerTotal([1, 2, 3], 1) 
findSmallerTotal([3, 2, 5, 8, 7], 999)
findSmallerTotal([3, 2, 5, 8, 7], 0)