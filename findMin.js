function findMin(arr) {
    var min = arr[0];
    for(var i = 1; i <= arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i]
        } ;
    };
    console.log("result is ", min)
};

findMin([1, 2, 5, 6, 99, 4, 5]);
findMin([1, 6, 0, 33, 44, 88, -10])