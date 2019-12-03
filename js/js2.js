function getNumberFromInput(id) {
  var input = document.getElementById(id);
  return parseInt(input.value);
};
function calculate() {
var message = 'Thanks for your measurements. The quote for your garment is £' + getNumberFromInput("waist-size") * (getNumberFromInput("height") * (getNumberFromInput("chest")));
// alert('Thanks for your measurements. The quote for your garments is £' + getNumberFromInput("waist-size") * (getNumberFromInput("height") * (getNumberFromInput("chest"))));
//console.log(getNumberFromInput("height"));
//console.log(getNumberFromInput("chest"));
document.getElementById('message').textContent = message;
return false;
};