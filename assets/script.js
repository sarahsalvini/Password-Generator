var min = 8;
var max = 128;
var pwLength = -1;
var pwChars = "";
var charOptions = [
    {
        description: "special characters",
        charSet: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
        use: false,
    },
    
    {
        description: "numbers",
        charSet: "0123456789",
        use: false,
    },

    {
        description: "upper case letters",
        charSet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        use: false,
    },

    {
        description: "lower case letters",
        charSet: "abcdefghijklmnopqrstuvwxyz",
        use: false,
    },
];


// Get Elements from the Page
var genButton = document.getElementById("generate");
var copyButton = document.getElementById("copy");
var passwordText = document.getElementById("password");

// Click generate to start password creation
genButton.addEventListener("click", function() {
    if (pwChars !== "" || getOptions()) {
        var password = generatePassword(pwChars, pwLength);
        updatePage(password);
    }
});


//  Prompt the user for a password length depending on true or false alerts users
 
function getOptions() {
    pwLength = getLength();
    if (pwLength < 0) {
        alert("Password must be between " + min + " and " + max + "characters.");
        return false;
    }

    pwChars = getChars();
    if (pwChars === "") {
        alert("You must select at least 1 character set to use.");
        return false;
    }
    return true;
}


// Prompt the user for a Password Length and turns valid number into a string

function getLength() {
    var lengthInput = prompt("How long would you like your password? (" + min + " - " + max + " characters)");
    var length = parseFloat(lengthInput);

    if (!Number.isInteger(length)) {
        return -1;
    } else if (length < min) {
        return -1;
    } else if (length > max) {
        return -1;
    }
    return length;
}


// Give the user a series of prompt to determine how they would like their password formatted
// Returns a string of characters that can be used in the password
 
function getChars() {
    var chars = "";

    for (var i=0; i<charOptions.length; i++) {
        var option = charOptions[i];
        if (confirm("Would you like to use " + option.description + "?")){
            chars += option.charSet;
            charOptions[i].use = true;
        }
    }
    return chars;
}



// Creates and returns randomly generated string
 
function generatePassword(availableChars, length) {
    var result;
    var badPw;
    do {
        result = "";
        badPw = false;
        for (var i=0; i<length; i++) {
            result += getRandomChar(availableChars);
        }
        for (var i=0; i<charOptions.length; i++) {
            if (charOptions[i].use && !isUsingChars(charOptions[i].charSet, result)) {
                badPw = true;
                break;
            }
        }
    } while(badPw);
    return result;
}

function isUsingChars(charSet, password) {
    for(var i=0; i<charSet.length; i++) {
        if (password.includes(charSet[i])) {
            return true;
        }
    }
    return false;
}


// place password in text area and 
function updatePage(password) {
    document.getElementById("password").textContent = password;
    copyButton.disabled = false;
}

// generates random characters
function getRandomChar(availableChars) {
    let i = Math.floor(Math.random() * availableChars.length);
    return availableChars[i];
}

// Copies password to clipboard

copyButton.addEventListener("click", function() { 
    passwordText.select();   
    passwordText.setSelectionRange(0, 128);
    document.execCommand("copy");   
});