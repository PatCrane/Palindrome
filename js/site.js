function handleInput(){
    
    document.getElementById("alert").classList.add("invisible");
    
    let userString = document.getElementById("userString").value;

    let cleansedString = cleanString(userString);
    
    displayResult(cleansedString);  
}

function cleanString(userString) {

    let output = userString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/[0-9]/g, '').split(/\s/).join('').toLowerCase();

    return output;

}

function reverseString(inputString){

    let output = [];
    
    for (let index = inputString.length - 1; index >= 0 ; index--) {
        
        output += inputString[index];
        
    }

    return output;
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

function displayResult(inputString) {

    if(inputString == "") {
        
        alert("Please enter a string");

    } else if (isPalindrome(inputString) == true) {

        document.getElementById("alert-header").innerHTML = `Woot`;
    
        document.getElementById("msg").innerHTML = `${inputString} is a palindrome!`;
        
        document.getElementById("alert").classList.remove("invisible");
        
        document.getElementById("alert").classList.add("alert-success");

    } else {

        document.getElementById("alert-header").innerHTML = `Bummer`;
    
        document.getElementById("msg").innerHTML = `${inputString} is not a palindrome.`;
        
        document.getElementById("alert").classList.remove("invisible");
        
        document.getElementById("alert").classList.add("alert-danger");
    }
}
