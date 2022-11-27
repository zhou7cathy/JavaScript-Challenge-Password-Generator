// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">","?", "@", "[", "^", "_","`", "{", "|" ,"}", "~", "]"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var result = "";
    var passwordLength = prompt ("How many characters would you link your password to contain ?");
    var lowercaseCharacter = confirm ("Click Okay to confirm including lowercase characters.");
    var uppercaseCharacter = confirm ("Click Okay to confirm including uppercase characters.");
    var numericCharacter = confirm ("Click Okay to confirm including numeric characters.");
    var specialCharacter = confirm ("Click Okay to confirm including special characters.");
    
    if (lowercaseCharacter === true && uppercaseCharacter === false && numericCharacter === false && specialCharacter === false){
        for (var i = 0; i < passwordLength; i++ ){
            result = result + lowercase[Math.floor(Math.random() * lowercase.length)]
        }
    } 
    else if (lowercaseCharacter === true && uppercaseCharacter === true && numericCharacter === false && specialCharacter === false){
        var option = lowercase.concat(uppercase);
        for (var i = 0; i < passwordLength; i++ ){
            result = result + option[Math.floor(Math.random() * option.length)]
        }
    }
    else if (lowercaseCharacter === true && uppercaseCharacter === true && numericCharacter === true && specialCharacter === false){
        var option = lowercase.concat(uppercase,numeric);
        for (var i = 0; i < passwordLength; i++ ){
            result = result + option[Math.floor(Math.random() * option.length)]
        }
    }
    else if (lowercaseCharacter === true && uppercaseCharacter === true && numericCharacter === true && specialCharacter === true){
        var option = lowercase.concat(uppercase,numeric,special);
        for (var i = 0; i < passwordLength; i++ ){
            result = result + option[Math.floor(Math.random() * option.length)]
        }
    }
    else if (lowercaseCharacter === false && uppercaseCharacter === true && numericCharacter === false && specialCharacter === false){
        for (var i = 0; i < passwordLength; i++ ){
            result = result + uppercase[Math.floor(Math.random() * uppercase.length)]
        }
    }
    else if (lowercaseCharacter === false && uppercaseCharacter === true && numericCharacter === true && specialCharacter === false){
        var option = uppercase.concat(numeric);
        for (var i = 0; i < passwordLength; i++ ){
            result = result + option[Math.floor(Math.random() * option.length)]
        }
        return result;
    }
    else if (lowercaseCharacter === false && uppercaseCharacter === true && numericCharacter === true && specialCharacter === true){
        var option = uppercase.concat(numeric,special);
        for (var i = 0; i < passwordLength; i++ ){
            result = result + option[Math.floor(Math.random() * option.length)]
        }
    }
    else if (lowercaseCharacter === false && uppercaseCharacter === false && numericCharacter === true && specialCharacter === false){
        for (var i = 0; i < passwordLength; i++ ){
            result = result + numeric[Math.floor(Math.random() * numeric.length)]
        }
    }
    else if (lowercaseCharacter === false && uppercaseCharacter === false && numericCharacter === true && specialCharacter === true){
        var option = numeric.concat(special);
        for (var i = 0; i < passwordLength; i++ ){
            result = result + option[Math.floor(Math.random() * option.length)]
        }
    }
    else if (lowercaseCharacter === false && uppercaseCharacter === false && numericCharacter === false && specialCharacter === true){
        for (var i = 0; i < passwordLength; i++ ){
            result = result + special[Math.floor(Math.random() * special.length)]
        }
    }
    else if (lowercaseCharacter === false && uppercaseCharacter === false && numericCharacter === false && specialCharacter === false){
        alert("You have to select at least one type of character! Please try again.");
        generatePassword();
    }
    return result;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

