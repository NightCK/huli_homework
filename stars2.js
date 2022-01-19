function stars2(n) {
    var result = ""
    
    for(var line = 1; line <= n; line++) {
        
        if(line != n + 1){
            for(var i = 0; i < line; i++) {
                result += "*"
            }
        } else {
            console.log("else")
        }


        if(line < n) {
            result += "\n"
        }
    }

    return result
}

console.log(stars2(3))