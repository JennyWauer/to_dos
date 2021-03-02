// remove blanks

removeBlanks(" Pl ayTha tF u nkyM usi c ")

function removeBlanks(str){
    return str.split(" ").join("");
};

// Get Digits

getDigits("aswrwe0905kl")

function getDigits(str){
    let strArr = str.split("");
    let numbers = "";
    for(var i=0; i<strArr.length; i++){
        if(strArr[i]%1 == 0){
            numbers += strArr[i];
        }
    }
    return numbers/1;
}

// Acronyms

acronyms("there's no free lunch - gotta pay yer way.")

function acronyms(str) {
    let strArr = str.split(" ")
    let strAcro = ""
    for(var i=0; i<strArr.length; i++){
        if(strArr[i] == false){
            continue
        } else {
            strAcro += strArr[i][0].toUpperCase()
        }
    }
    return strAcro
}

// Count

count("Honey pie, you are driving me crazy")

function count(str){
    let nonStr = str.split(" ")
    let count = 0
    nonStr = nonStr.join("")
    for(var i=0; i<nonStr.length; i++){
        count += 1
    }
    return count
}

// Remove

remove()

function remove(strArr, num){
    for(var i=0; i<strArr.length; i++){
        if(i.length<num){
            for (var y = i; y < strArr.length-1; y++){
                var temp = strArr[y];
                strArr[y] = strArr[y+1];
                strArr[y+1] = temp;
            }
        strArr.pop();

        }
        return strArr
    }
}