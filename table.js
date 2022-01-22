var result = ""

function table(num) {
    for(var i = 1; i <= 9; i++) {
        console.log(`${num}*${i} =`, num*i)
    }
}

table(7)