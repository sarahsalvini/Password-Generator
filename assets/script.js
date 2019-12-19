var min = 8;
var max = 128;


// Get elements to page 
var genButton = document.getElementById("generate");
var copyButton = document.getElementById("copy");
var passwordText = document.getElementById("password");

genButton.addEventListener("click", () => {
    var userPass = prompt("How long would you like your password? (" + min + "-" + max + " characters.)")
    console.log(userPass);

    if (min > userPass || userPass > max) {
        alert("Password must be between " + min + " and " + max + " characters.");
        
    } else {
        var userLower = confirm("Would you like to include lowercase characters?")
        console.log(userLower);
        var userUpper = confirm("Would you like to include uppercase characters?")
        console.log(userUpper);
        var userNumber = confirm("Would you like to include numbers?")
        console.log(userNumber);
        var userSpec = confirm("Would you like to include special characters?")
        console.log(userSpec);
    }
})
