// variables
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '<', '>', '?',];
var pass = parseInt(userLeng)
var password = "";
var password2 = "";
var password3 = "";
var password4 = "";
var generate = document.getElementById("generate");
var copy = document.getElementById("copy");

// questions
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



      

// how the password is being


function generatepassword() {
  if (userLower.confirm) {
    for (var i = 0; i < pass.length; i++) {
    password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length)));
    }
  }
}
function generatepassword() {
  if (userUpper.confirm) {
    for (var i = 0; i < pass.length; i++) {
      password2 = password2 + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length)));
    }
  }
}
function generatepassword() {
  if (userSpec.confirm) {
    for (var i = 0; i < pass.length; i++) {
    password3 = password3 + special.charAt(Math.floor(Math.random() * Math.floor(special.length)));
    }
  }
}
function generatepassword() {
  if (userNumbers.confirm) {
    for (var i = 0; i < pass.length; i++) {
    password4 = password4 + number.charAt(Math.floor(Math.random() * Math.floor(number.length)));
    }
  }
}




