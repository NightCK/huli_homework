function winner(arr) {
    for(var i = 0; i<arr.length; i++) {
        if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][0] !== '') {
            return arr[i][0]
        }

        if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] && arr[0][i] !== '') {
            return arr[0][i]
        }

        if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[0][0] !== '') {
            return arr[0][0]
        }

        if(arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0] && arr[0][2] !== '') {
            return arr[0][2]
        }
    }

    return 'draw'
}

console.log(
    winner([
        ['O', 'O', 'X'],
        ['O', 'X', 'X'],
        ['O', 'X', 'O']
    ]) 
    // 預期回傳值：O
)

console.log(
    winner([
        ['O', 'O', 'X'],
        ['O', 'X', 'X'],
        ['X', 'X', 'O']
    ]) 
    // 預期回傳值：X
)

console.log(
    winner([
        ['O', 'O', 'X'],
        ['O', 'O', 'X'],
        ['X', 'X', '']
    ])  
    // 預期回傳值：draw
)

console.log(
    winner([
        ['O', '', 'X'],
        ['O', '', 'X'],
        ['', '', 'X']
    ])  
    // 預期回傳值：X
)
