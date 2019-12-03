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