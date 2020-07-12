//var myPrompt = prompt ("Your post");
//var numberChar = myPrompt.length;
//var remainingChar = 280 - numberChar;
//console.log("You have written " + numberChar + "chars, you have " + remainingChar + " left");
//alert(myPrompt.slice(0,140));

//var name = prompt("What is your name?");
//var firstUpperCase = name.slice(0,1).toUpperCase();
//var nameLength = name.length;
//var restOfTheName = name.slice(1,nameLength).toLowerCase();
//alert("Hello " + firstUpperCase + restOfTheName);

//var dogAge = prompt("What is your dog's age?");
//var humanAge = (dogAge-2)*4+21;
//alert("Your dog's age in human age is:" + humanAge);

//function lifeInWeeks(age) {

/************Don't change the code above************/
//var ageInput = age;

//var leftAgeInDays = (365 * 90) - (ageInput * 365);
//var leftAgeInWeeks = (52 * 90) - (ageInput * 52);
//var leftAgeInMonths = (12 * 90) - (ageInput * 12);
//console.log("You have " + leftAgeInDays + ", " + leftAgeInWeeks + " weeks and " + leftAgeInMonths + " months left.");




/*************Don't change the code below**********/
//}

//lifeInWeeks(56);

//function bmiCalculator(weight, height){
//   var bmiValue = weight / (height * height);
//return bmiValue;
//}

//bmiCalculator(65, 1.8);

//function loveCalculator(name1, name2){
//  var percentage = Math.floor(Math.random() * 100);
//return percentage;
//}

//loveCalculator(1,2);

/* var guestList = ["Angela", "Jack", "Pam", "James"];

var Name = prompt("What is your name?");

function nameList(){
   if(guestList.includes(Name)){
       alert("Welcome");
   }else{
       alert("Sorry not sorry");
   }

}
*/

/* var outPut = [];
var number = 0;
var times = 30;

function fizzBuzz() {
  number++;

  if ((number % 3 === 0) && (number % 5 === 0)) {
    outPut.push("FizzBuzz");
  } else if (number % 3 === 0) {
    outPut.push("Fizz");
  } else if (number % 5 === 0) {
    outPut.push("Buzz");

  } else {
    outPut.push(number);
  }
  console.log(outPut);
}

for (var i = 0; i < times; i++) {
  fizzBuzz();
}

*/


// var numberOfBeers = 99;
//
// function beer() {
//
//   while (numberOfBeers < 100 && numberOfBeers > 0) {
//     if (numberOfBeers === 2) {
//       console.log(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer. Take 1 down pass it around, " + (numberOfBeers - 1) + " bottle of beer on the wall.");
//     } else if (numberOfBeers === 1) {
//       console.log(numberOfBeers + " bottle of beer on the wall, " + numberOfBeers + " bottle of beer. Take 1 down pass it around, no more bottles of beer on the wall.");
//       console.log("No more bottles");
//       break;
//     } else {
//       console.log(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer. Take 1 down pass it around, " + (numberOfBeers - 1) + " bottles of beer on the wall.");
//     }
//     numberOfBeers--;
//
//
//   }
// }
// beer();

// Fibonacci
// var fibArray = [0, 1];
// function fibonacciGenerator(n) {
//
//   if (n === 0) {
//     fibArray.pop();
//     fibArray.pop();
//   } else if (n === 1) {
//     fibArray.pop();
//   } else if (n === 2) {}
//   if (n > 2) {
//     for (i = 3; i <= n; i++) {
//       fibArray.push(fibArray[i - 3] + fibArray[i - 2]);
//     }
//   }
//
//   console.log(fibArray);
// }
//
//
// fibonacciGenerator(10);



// var fibArray = [0, 1];
//
// function fibonacciGenerator(n,firstElement,secondElement) {
//
// if (n>2) {
//   var temp = firstElement + secondElement;
//   firstElement = secondElement;
//   fibArray.push(temp);
//   fibonacciGenerator(--n,firstElement,temp);
// }
// console.log(fibArray);
// }
//
//
// fibonacciGenerator(4,0,1);

// Factorial

//
// function fakt(n) {
//
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     var result = n
//     while (n > 1) {
//       result = result * (n - 1);
//       n--;
//     }
//   }
//   console.log(result);
// }
// fakt(5);
function getCount(str) {
var vowelsCount = 0;
var vowels = ["a","e","i","o","u"];
var vowelsArray=[];

for (i = 0; i<=str.length; i++){
if (vowels.includes(str[i])){
vowelsArray.push(str[i]);
}
vowelsCount = vowelsArray.length;
}

return vowelsCount;
console.log(vowelsCount);
}
getCount("Baba")
