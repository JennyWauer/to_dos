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
    var temp = arr[0]
    for(var i=0; i<arr.length-1; i++){
        arr[i-1] = arr[i]
    }
    console.log(arr)
    return temp
}

// Insert At

insertAt([3,4,1,7,8], 3, 2)

function insertAt(arr, index, num){
    for(var i=arr.length-1; i>=index; i--){
        arr[i+1] = arr[i]
    }
    arr[index] = num
    return arr
}

// Remove At

removeAt([1,5,2,8,6], 3)

function removeAt(arr, num){
    var temp = arr[num]
    for(var i=0; i<arr.length-1; i++){
        arr[i-1] = arr[i]
    }
    console.log(arr)
    return temp
}

// Swap Pairs

swapPairs([2,4,1,5])
swapPairs([1,7,4,5,3])

function swapPairs(arr){
    for(var i=0; i<arr.length - 1; i+=2){
        const temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    return arr
}

// Remove Duplicates

removeDuplicates([1,1,3,4,4,5,6,6,7])

function removeDupesUnnested(arr) {
	let newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}