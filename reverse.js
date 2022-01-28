function reverse(str) {
    var strArray = str.split('')

    strArray.sort(function(a, b) {
        if(strArray[a] < strArray[b]){ // 比較 index number，比較大的就會排前面
            return 1
        } else {
            return -1
        }
    })

    console.log(strArray.join(''))
    return
}

reverse("1a2b")