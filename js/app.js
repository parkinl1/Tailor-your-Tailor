// DATA TYPES
/*
console.log('hello');
*/
// alert('hello');
var name = 'user';
//name = prompt('What time is it?');
alert('Hello ' + name);
var answer = prompt('Would you like to sign up to our newsletter?')
if (answer == 'yes' || answer == 'Yes' ) {
 alert('Great! Could we have your e-mail address?');
 var email = prompt('Please enter your e-mail address')
 alert('Thank you. You are now signed up!')
} else if (answer == 'no' || answer == 'No') {
alert('No worries! Hopefully there is enough information on the website.');
} else {
 alert("You didn't answer, so we hope you enjoy website anyway!");
}
/*
var tvShow = "Friends";
var characters = 6;
var rating =7.5;
console.log(tvShow + " is a show with " + characters + " characters and a rate of " + rating);
console.log(${tvShow}  is a show with ${characters} characters and a rate of ${rating}.);
console.log(My name is ${name} and I'm learning Javascript.);
var hasShowfinished = true;
var age = 14;
var half = 0.5;
var nothingthere = null;
var bool = true;
console.log(bool);
console.log(false);
alert("Hi! I'm having a party tonight.");
var answer = prompt("Would you like to RSVP? Please answer 5 for yes");
if (answer === '5') {
   alert('Great! Looking forward to it!');
} else if (answer == 'yes') {
  alert('Great! You like breaking the rules.');
} else {
   alert('Hope you can make the next one');
}
var countries = ["Germany", "France"];
console.log(countries);
console.log(countries[0]);
countries.push("Denmark");
console.log(countries);
//countries.pop();
console.log(countries.join(', '));
alert("You're going to the shops");
var fruit = prompt("What fruit would you like to buy?");
if (fruit == 'apple') {
   var variety = prompt('What variety of apple do you like?');
   alert(I like ${variety} apples too!);
}
//countries.shift();
//console.log(countries);
// DATA TYPES EXERCISE
// IF/ELSE STATEMENTS
// IF/ELSE EXERCISE
// ARRAY
// ARRAY EXERCISE
// FINAL CLASS EXERCISE
*/

function calculate() {
 console.log(document.getElementById('waist-size'))

 return false;
}

