// Push Front

pushFront([3,5,1,6,9], 1)

function pushFront(arr, num){
    for(var i=arr.length-1; i>=0; i--){
        arr[i+1] = arr[i]
    }
    arr[0] = num
    return arr
}

// Pop Front

popFront([1,5,2,8,6])

function popFront(arr){

}

// Insert At

insertAt([3,4,1,7,8], 4, 2)

function insertAt(arr, index, num){

}