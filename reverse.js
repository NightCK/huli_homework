function reverse(str) {
    var strArray = str.split('')

    strArray.sort(function(a, b) {
      return -1
    })

    console.log(strArray.join(''))
    return
}

reverse("1a2b")