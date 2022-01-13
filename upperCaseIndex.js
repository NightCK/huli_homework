function position(str) {

    for(var letterIndex = 0; letterIndex < str.length; letterIndex++) {
        if(str[letterIndex] === str[letterIndex].toUpperCase()) {
            return console.log(str[letterIndex], letterIndex)
        }
    }
    return console.log("-1")
}

position("Abcd")
position("aBcd")
position("abCd")
position("abcD")
position("abCD")
position("abcd")