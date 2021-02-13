// Countdown
countdown(13);

function countdown(num){
    const newArr = []
    for(var i=num; i>=0; i--){
        newArr.push(i);
    };
    return newArr;
};