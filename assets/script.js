// Variables 
var min = 8;
var max = 128;
var number = ["0123456789"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
var userOptions = [""];
 

// user clicks generate, prompts user to answer length of their password
// is password is not between the parameters, alerts user to select a different number
function generatePassword(){
    var passWord = [""];
    var passPrompt = prompt("How long would you like your password? (" + min + "-" + max + " characters.)");
    console.log(passPrompt);
    var pass = parseInt(passPrompt);

    while (min > pass || pass > max || isNaN(pass)) {
        alert("Password must be between " + min + " and " + max + " characters.");
        return;
    };


// once user enters an acceptable length, user is asked to confirm the following questions
var userLower = confirm("Would you like to include lowercase characters?");
    console.log(userLower);
var userUpper = confirm("Would you like to include uppercase characters?");
    console.log(userUpper);
var userNumber = confirm("Would you like to include numbers?");
    console.log(userNumber);
var userSpec = confirm("Would you like to include special characters?");
    console.log(userSpec);


// if the user doesn't confirm any of the questions above, alert user to chose an option
    if (userLower !== true && userUpper !== true && userNumber !== true && userSpec !== true){
        alert("Please select at least one option");
        return;
        };


// if user inputs are true the corresponding question will pull the value of the arrays
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


// based on users input a password will be randomly gnerated 
    for (var i = 0; i < pass; i++) {
        passWord += userOptions[Math.floor(Math.random() * userOptions.length)]
    };


// password will be printed in textbox 
    console.log(passWord);
    document.getElementById("password").value = passWord;
}


// user will be able to copy password to their clipboard for use
function copyClipboard(){
    var copy = document.getElementById("password");
    copy.select();
    document.execCommand("copy");
    alert("Password copied to clipboard.");
};