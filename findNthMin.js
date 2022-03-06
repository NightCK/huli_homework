// 找出第 N 個最小值
// 成功了但不知道為什麼 Orz
// 比較到最後會剩下 [6,2]，但觸發了 shift() 居然沒有把 6 刪掉
// 而且 splice() 那段從未被觸發過，why?

function findNthMin(arr, minIndex) {
    for(var loopCount = 0; loopCount < minIndex; loopCount++) {
        var min = arr[0]

        for(var i = 1; i < arr.length; i++) {
            if(min > arr[i]) {
                min = arr[i]
            }
        }
        if(min = arr[0]) {
            console.log(min)
            console.log(arr)
            arr.shift()
        } else {
            console.log("splice trigger")
            arr.splice(min,1)
        }
    }
    console.log("result is", min)
}

findNthMin([8, 5, 6, 2], 3) // result is 6
findNthMin([1, 2, 3, 4, 5], 1)
findNthMin([1, 3, 5, 7, 9], 3) // result is 5
findNthMin([1, 1, 1, 1, 1], 2)