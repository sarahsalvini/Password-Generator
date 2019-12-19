var min = 8;
var max = 128;
var number = ["0123456789"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
var userOptions = [""];

// Get elements to page 

function generatePassword(){
    var passWord = [""];
    var passPrompt = prompt("How long would you like your password? (" + min + "-" + max + " characters.)");
    console.log(passPrompt);
    var pass = parseInt(passPrompt);

    while (min > pass || pass > max || isNaN(pass)) {
        alert("Password must be between " + min + " and " + max + " characters.");
        return;
    };

var userLower = confirm("Would you like to include lowercase characters?");
    console.log(userLower);
var userUpper = confirm("Would you like to include uppercase characters?");
    console.log(userUpper);
var userNumber = confirm("Would you like to include numbers?");
    console.log(userNumber);
var userSpec = confirm("Would you like to include special characters?");
    console.log(userSpec);


    if (userLower !== true && userUpper !== true && userNumber !== true && userSpec !== true){
        alert("Please select at least one option");
        return;
        };
    
    if (userLower === true){
        userOptions = userOptions + lowerCase;
    };
    
    if (userUpper === true){
        userOptions = userOptions + upperCase;
    };
    
    if (userNumber === true){
        userOptions = userOptions + number;
    };
    
    if (userSpec === true){
        userOptions = userOptions + special;
    };

    for (var i = 0; i < pass; i++) {
        passWord += userOptions[Math.floor(Math.random() * userOptions.length)]
    };


    console.log(passWord);
    document.getElementById("password").value = passWord;
}
