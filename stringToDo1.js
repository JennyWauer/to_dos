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
    let strAcr = ""
    for(var i=0; i<str.length; i++){
        
    }
}
