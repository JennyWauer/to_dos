// Reverse

reverse([1,4,2,6,7])

function reverse(arr){
    for(var i=0; i<arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}