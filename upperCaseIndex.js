function position(str) {
    for(var letterIndex = 0; letterIndex < str.length; letterIndex++) {
        console.log(letterIndex)
        
        if(str[letterIndex] === str[letterIndex].toUpperCase()) {
            return console.log(str[letterIndex], letterIndex)
        } else {
            return console.log(letterIndex);
        }
    }
}

position("ABcd")