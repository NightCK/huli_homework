function stars(n) {
    var result = ""
    var i = 0

    for(var line = 0; line < n; line++ ) {
        console.log("this is line", line)
        i++

        while(i < line) {
            result += "*"
            console.log(result)
        }
    }
    return
}

stars(5)