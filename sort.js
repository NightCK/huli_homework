// 卡超久 Orz
// 忘記要在每次迴圈需要將 min, index 歸零，導致每次 push 都是 2...

function sort(arr){
    var result = []

    while(arr.length > 0) {
        var min = arr[0]
        var index = 0

        for(var i = 1; i <= arr.length; i++){
            if(min > arr[i]){
                min = arr[i]
                index = i
            }
        }
        result.push(min)
        arr.splice(index,1)
    }
    console.log(result)
    return
}

sort([6, 8, 3, 2]) // 預期回傳值：[2, 3, 6, 8]
sort([1, 2, 7 ,5]) // 預期回傳值：[1, 2, 5, 7]