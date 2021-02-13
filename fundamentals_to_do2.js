// Countdown
countdown(13);

function countdown(num){
    const newArr = []
    for(var i=num; i>=0; i--){
        newArr.push(i);
    };
    return newArr;
};

// Print & Return

printReturn(3, 7);

function printReturn(numOne, numTwo){
    console.log(numOne);
    return numTwo;
};

// First Plus Length

firstLength(["hello",6,2,7])

function firstLength(arr){
    const total = arr[0] + arr.length;
    return total;
}

// Greater Than Second
greaterThan([1,3,5,7,9,13]);

function greaterThan(arr){
    let count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[1]){
            console.log(arr[i]);
            count += 1;
        };
    }
    return count;
};

// Greater Than Generalized

greaterGeneralized([1]);

function greaterGeneralized(arr){
    let count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[1]){
            console.log(arr[i]);
            count += 1;
        };
    };
    return count;
}

// length & Value

lengthValue(4,4);

function lengthValue(numOne, numTwo){
    var newArr = []
    for(var i=0; i<numOne; i++){
        newArr.push(numTwo)
    }
    if(numOne == numTwo){
        console.log("Jinx!")
    }
    return newArr
}