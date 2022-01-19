function stars(n) {
    var result = ""
    var i = 0

    for(var line = 1; line <= n; line++ ) {
        // console.log("this is line =", line)

        while(i < line) {
            // console.log("this is i =", i)
            result += "*"
            i++
        }

        console.log(result)
    }
    return
}

stars(7)


// // 別人的寫法，好精簡！
// function Printstars(num) {
//     for (let i = 1; i <= num; i++) {
//       console.log('*'.repeat(i))
//     }
//   }