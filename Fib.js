// function fib(n) {
//     var fibArray = []

//     for(var i = 1; i <= n; i++ ) {
//         if(i % 3 == 0){ 
//             fibArray.push((i-1)+(i-2));
//         } else { 
//             fibArray.push(i)
//         }
//     }

//     return fibArray[n-1]
// }
// console.log(fib(2))

// 遞迴的寫法

function fibReverse(n) {
    if(n == 1){
      return 1;
    }
    else if(n == 2){
      return 1;
    }
    else{
      console.log(fibReverse(n-1))
      console.log(fibReverse(n-2))
      return fibReverse(n-1) + fibReverse(n-2);
    }
  }