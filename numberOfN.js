function findSmallCount(arr, num) {
    var result = 0

    for(var n = 0; arr[n] < num; n++) {
        result += 1
    }

    console.log(result)
    return
}

findSmallCount([1,2,3],4)