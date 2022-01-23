function fib(n) {
    var fibArray = []

    for(var i = 1; i <= n; i++ ) {
        if(i % 3 == 0){ 
            fibArray.push(i)
            console.log(i)
        } else { 
            fibArray.push((i-1)+(i-2));
            console.log(i)
        }
    }
    return fibArray
}
console.log(fib(5))