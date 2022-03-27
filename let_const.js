// let 和 const 的差異

// 不需要改變的值，用 const。
// let 的生存範圍是 block，
// var 是 function。

function test() {
    if ( 10 > 5) {
        var a = 24
    }
    console.log(a)
}

test()