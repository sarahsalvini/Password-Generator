// variables
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '<', '>', '?',];


var password = "";
var password2 = "";
var password3 = "";
var password4 = "";

var userLeng = "";
var userLower = "";
var userUpper = "";
var userNumbers = "";
var userSpec = "";


var generate = document.getElementById("generate");
var copy = document.getElementById("copy");

// questions based on initial answer
var userLeng = prompt('How long would you like your password? (min 8 - max 128)');
if (userLeng > 128 || userLeng < 8) {
    alert("Must be within 8-128 characters.");
    var userLeng = prompt('How long would you like your password? (min 8 - max 128)');
}

 else (userLeng < 128 || userLeng > 8); {
        console.log(userLeng)

    var userLower = confirm('Would you like to include lower case characters?');
       console.log(userLower)

    var userUpper = confirm('Would you like to include upper case characters?');
      console.log(userUpper)


    var userNumbers = confirm('Would you like to include numbers?');
      console.log(userNumbers)

    var userSpec = confirm('Would you like to include a special characters?');
      console.log(userSpec)
      }



// how the password is generated

function generatepassword() {
  if (userLower.confirm) {
    for (var i = 0; i < lowerCase.length; i++) {
    password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length)));
    }
  }
}
function generatepassword() {
  if (userUpper.confirm) {
    for (var i = 0; i < upperCase.length; i++) {
      password2 = password2 + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length)));
    }
  }
}
function generatepassword() {
  if (userSpec.confirm) {
    for (var i = 0; i < special.length; i++) {
    password3 = password3 + special.charAt(Math.floor(Math.random() * Math.floor(special.length)));
    }
  }
}
function generatepassword() {
  if (userNumbers.confirm) {
    for (var i = 0; i < number.length; i++) {
    password4 = password4 + number.charAt(Math.floor(Math.random() * Math.floor(number.length)));
    }
  }
}
