// 本來是想盡辦法想去對比各種排列組合，
// 後來拿起筆自己玩了幾場圈圈叉叉後，
// 發現贏家其實就是棋子數量比較多的那邊，
// 只看結果的話是成立的，
// 但如果是動態的遊戲，還想不到用位置判斷以外的選擇。

function winner(arr) {
    var resultOfO = []
    var resultOfX = []
    var inputArray = arr.flat() // 壓平陣列，增加可讀性

    // 判斷每個數字是 O 還是 X，如果是 O 就推到 resultOfO，是 X 就推到 resultOfX
    inputArray.forEach(function(index) {
            if( index === 'O' ) {
                resultOfO.push('O')
            } else if ( index === 'X') {
                resultOfX.push('X')
            }
        }
    )
    
    // 比較 O 還是 X 的數量，多的就是贏家，一樣則是平手
    if (resultOfO.length > resultOfX.length) {
        return console.log('O')
    } else if(resultOfX.length > resultOfO.length) {
        return console.log('X')
    } else if (resultOfX.length === resultOfO.length) {
        return console.log('draw')
    }
}

winner([
    ['O', 'O', 'X'],
    ['O', 'X', 'X'],
    ['O', 'X', 'O']
]) 
// 預期回傳值：O
    
winner([
    ['O', 'O', 'X'],
    ['O', 'X', 'X'],
    ['X', 'X', 'O']
]) 
// 預期回傳值：X

winner([
    ['O', 'O', 'X'],
    ['O', 'O', 'X'],
    ['X', 'X', '']
])  
// 預期回傳值：draw

winner([
    ['O', '', 'X'],
    ['O', '', 'X'],
    ['', '', 'X']
])  
    // 預期回傳值：X