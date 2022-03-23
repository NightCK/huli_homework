function flatten(arr) {
    var result = []

    if(typeof(arr) === 'object') {
        while(arr.length >= 1) {
            var selection = arr.pop()
            if(Array.isArray(selection)) {
                arr.push(...selection)
            } else {
                result.push(selection)
            }
        }
    } else {
        console.log('Please enter an array.')
        return
    }

    console.log(result.reverse())
    return
}

flatten([1, 2, [1, 2], [1, 3], 6]) //預期回傳值：[1, 2, 1, 2, 1, 3, 6]
flatten([1, [2, [3, [4]], 5], 6]) //預期回傳值：[1, 2, 3, 4, 5, 6]
flatten('test')