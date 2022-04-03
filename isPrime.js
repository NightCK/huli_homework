// 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
// 質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除

function isPrime(n) {
    // 如果輸入 1 直接判定不是質數
    if(n === 1) {
        return false
    }

    // 逐個數字檢查，比 n 小的數字是否能整除 n，可以的話就不是質數
    for(var i = 2; i<n ; i++) {
        if(Number.isInteger(n/i) === true) {
            return false
        }
    }
    
    // 通過上面的檢查，不是 1 也不能被比它小的數字整除，就是質數
    return true
}

console.log(isPrime(1))
// 正確回傳值：false

console.log(isPrime(5))
// 正確回傳值：true

console.log(isPrime(37))
// 正確回傳值：true

console.log(isPrime(91))
// 正確回傳值：false