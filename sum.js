function sum(arr) {
    var result = 0

    for(var n = 0; n < arr.length; n++) {
        result += arr[n]
    }

    console.log(result)
    return
}

sum([1,2,3])
sum([-1, 1, 2, -2, 3, -3])