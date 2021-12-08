function handleInput(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    let cleansedString = cleanString(userString);
    
    if(cleansedString == "") {
        
        alert("Please enter a string");

    } else if (isPalindrome(cleansedString) == true) {

        palindromeSuccess(cleansedString);

    } else {

        palindromeFail(cleansedString);
    }
    
}

function cleanString(userString) {

    let output = userString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/[0-9]/g, '').split(/\s/).join('').toLowerCase();

    return output;

}


function reverseString(userString){

    let revString = [];
    
    for (let index = userString.length - 1; index >= 0 ; index--) {
        
        revString += userString[index];
        
    }

    return revString;
}

function isPalindrome(inputString) {

    let userString = inputString;

    let revString = reverseString(userString);

    if(userString == revString) {

        return true;

    } else {

        return false;

    }

}

function palindromeFail(inputString){

    document.getElementById("alert-header").innerHTML = `Bummer`;
    
    document.getElementById("msg").innerHTML = `${inputString} is not a palindrome.`;
    
    document.getElementById("alert").classList.remove("invisible");
    
    document.getElementById("alert").classList.add("alert-danger");
}

function palindromeSuccess(inputString){

    document.getElementById("alert-header").innerHTML = `Woot`;
    
    document.getElementById("msg").innerHTML = `${inputString} is a palindrome!`;
    
    document.getElementById("alert").classList.remove("invisible");
    
    document.getElementById("alert").classList.add("alert-success");
}