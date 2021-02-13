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