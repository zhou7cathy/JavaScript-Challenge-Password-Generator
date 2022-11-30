//Store four types of character into four variables using arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Increased possibility for number to be include in the password when user select numeric character 
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">","?", "@", "[", "^", "_","`", "{", "|" ,"}", "~", "]"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var result = "";
    var passwordLength = prompt ("How many characters would you link your password to contain ?");

    //If the input of passwordLength is less than 8 or greater than 128 the function will stop after alert and return message "The password length must be between 8 and 128 characters! Please try again." as password
    if (passwordLength < 8 || passwordLength >128){
        alert("The password length must be between 8 and 128 characters! Please try again.");
        return"The password length must be between 8 and 128 characters! Please try again.";
    }
    //If the input of passwordLength is within the range it will store the input number in the var passwordLength and continue
    var lowercaseCharacter = confirm ("Click Okay to confirm including lowercase characters.");
    var uppercaseCharacter = confirm ("Click Okay to confirm including uppercase characters.");
    var numericCharacter = confirm ("Click Okay to confirm including numeric characters.");
    var specialCharacter = confirm ("Click Okay to confirm including special characters.");
    
    //Use for loop for all possible of selection, and randomly get one character at a time until we got enough number of characters
    if (lowercaseCharacter === true && uppercaseCharacter === false && numericCharacter === false && specialCharacter === false){
        for (var i = 0; i < passwordLength; i++ ){
            result = result + lowercase[Math.floor(Math.random() * lowercase.length)]
        }
    } 
    else if (lowercaseCharacter === true && uppercaseCharacter === true && numericCharacter === false && specialCharacter === false){
    //Using concat method joins lowercase and uppercase array and returns a new array called option
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

