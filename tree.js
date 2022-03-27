// 請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹

function tree(num) {
    var multiple = 1

    if(num === 1) {
        console.log('*')
        return
    } else if(num > 1) {
        for(var i = 1; i <= num; i++, multiple +=2) {
            var line = ''
            line += ' '.repeat(num - i)
            line += '*'.repeat(multiple)
            console.log(line)
        };
        
        for(var i = 1; i <= num; i++) {
            var line = ''
            line += ' '.repeat(num - 1)
            line += '*'
            console.log(line)
        }
        return;
    };
}
    
tree(20);