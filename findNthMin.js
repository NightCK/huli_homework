function findNthMin(arr, minIndex) {
    for(var loopCount = 0; loopCount < minIndex; loopCount++) {
        var min = arr[0]

        for(var i = 1; i < arr.length; i++) {
            if(min > arr[i]) {
                min = arr[i]
                console.log("min is", min)
                console.log("if trigger",arr)
            }
        }
        if(min = arr[0]) {
            arr.shift()
        } else {
            arr.splice(min,1)
        }
    }
    console.log("result is ", min)
}

findNthMin([8, 5, 6, 2], 3); // result is 6
findNthMin([1, 2, 3, 4, 5], 1)
findNthMin([1, 3, 5, 7, 9], 3) // result is 5
findNthMin([1, 1, 1, 1, 1], 2)