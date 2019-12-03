var name = 'user';
alert('Hello ' + name);
var answer = prompt('Would you like to send us a story about your item of clothing?')
if (answer == 'yes' || answer == 'Yes' ) {
 alert('Great! Please email us at stories@tyt.co.uk');
} else if (answer == 'no' || answer == 'No') {
alert('No worries! Maybe next time.');
} else {
 alert("You didn't answer, so we hope you enjoy website anyway!");
}