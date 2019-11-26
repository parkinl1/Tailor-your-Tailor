function getNumberFromInput(id) {
    var input = document.getElementById(id);
    return parseInt(input.value);
};

function calculate() {

alert(getNumberFromInput("waist-size") * (getNumberFromInput("height") * (getNumberFromInput("chest"))));
//console.log(getNumberFromInput("height"));
//console.log(getNumberFromInput("chest"));



 return false;
};



/*
function myInput1() {
    var number1 = prompt("Please enter Number 1?");
     return parseInt(number1);
   }
   
   var number1 = myInput1();
   console.log(number1);

function myInput2() {
    var number2 = prompt("Please enter Number 2?");
      return parseInt(number2);
}

var number2 = myInput2();
console.log(number2);


function totalNumber() {
  return number1 + number2;
}


var Answer1 = totalNumber();
console.log(Answer1);

 console.log(document.getElementById('waist-size'))
*/