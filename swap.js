// 將字串大小寫互換，例如 Peter > pETER
// 用 Split() 把字分開後，再用 map() 逐一檢查是否為 uppercase，是的話轉為 lowercase，不是則轉為 uppercase
// 最後用 join() 合成一個字串

function swap(str) {
    // Check whether the input is a string
    if(typeof(str) !== typeof("")) {
        return "Please enter a string."
    }

    var strArray = str.split('')
    var result = []

    strArray.forEach(function(txt){
        if(txt == txt.toUpperCase()) {
            result.push(txt.toLowerCase())
        } else {
            result.push(txt.toUpperCase())
        }
    })

    return result.join('')
}

console.log(swap("bcVa"))


// 另一種寫法是用 ASCII code