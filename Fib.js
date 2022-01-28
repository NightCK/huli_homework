function fib(n) {
    var fibArray = []

    for(var i = 1; i <= n; i++ ) {
        if(i % 3 == 0){ 
            fibArray.push((i-1)+(i-2));
            console.log("if", i)
        } else { 
            fibArray.push(i)
            console.log("else", i)
        }
    }

    return fibArray[n-1]
}
console.log(fib(2))