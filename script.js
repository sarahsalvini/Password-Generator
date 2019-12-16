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

// questions
var userLeng = prompt('How long would you like your password? (min 8 - max 128')

var userLower = confirm('Would you like to include lower case characters?');

var userUpper = confirm('Would you like to include upper case characters?');

var userNumbers = confirm('Would you like to include numbers?');

var userSpec = confirm('Would you like to include a special characters?');



function generatepassword() {
  if (userLower === true) {
    for (var i = 0; i <= pass / 2; i++) {
    password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length)));
    }
  }
}
function generatepassword() {
  if (userUpper === true) {
    for (var i = 0; i <= pass / 2; i++) {
      password2 = password2 + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length)));
    }
  }
}
function generatepassword() {
  if (userSpec === true) {
    for (var i = 0; i <= pass / 2; i++) {
    password3 = password3 + special.charAt(Math.floor(Math.random() * Math.floor(special.length)));
    }
  }
}
function generatepassword() {
  if (userNumbers === true) {
    for (var i = 0; i <= pass / 2; i++) {
    password4 = password4 + number.charAt(Math.floor(Math.random() * Math.floor(number.length)));
    }
  }
}