function makeStars(n) {
    var result = ""

    for(var line = 1; line <= n; line++) {
        for(var i = 0; i < line; i++) {
            result += "*"
        }

        if(line < n){
            result += "\n"
        }
    }

    return result
}

console.log(makeStars(5))