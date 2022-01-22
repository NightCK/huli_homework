// 範例：輸入 5，會得到 5 排星星，每一排星星數量和排數相同。
// 到第 6 排開始，星星會以遞減方式，每一排減少一顆星星直到歸零。

var result =""

function stars2(n) {
    for(var lineNumber = 1; lineNumber <= n; lineNumber++) {
        result += "*".repeat(lineNumber)
        if(lineNumber < n) {
            result += "\n"
        }
    }

    for(var i = n - 1; i >= 1; i-- ) {
        result += "\n"
        result += "*".repeat(i)
    }

    return result
}

console.log(stars2(5))