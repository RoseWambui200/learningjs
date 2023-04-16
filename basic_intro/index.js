// ELSE IF
/* let colors = ["red", "green", "blue", "yellow",]
let selectedColor = colors[4];
if(selectedColor == "red"){
    console.log("the color is red");

}
else if(selectedColor == "green") {
    console.log("the color is green");
}

else if(selectedColor == "blue") {
    console.log("the color is blue");
}

else  {
    console.log("the color is green");
} */
/* 
// SWITCH STATEMENTS
let names = ['rose', 'tracy', 'liz', 'sam',];
let selectedName = names[5];

switch(selectedName){
    case "rose": console.log("the name is rose"); break;
    case "tracy": console.log("the name is tracy"); break;
    case "liz": console.log("the name is liz"); break;
    case "sam": console.log("the name is sam"); break;
    default: console.log("there was an error!");
} */


/* // USING && to check whether two statements are true.
let goodMood = true;
let gotSleep = false;

if( goodMood && gotSleep) {
    console.log("today is a good day");
}
else {
    console.log("i am grumpy!");
} */

// USING THE DOUBLE ||to check and see if any statements are true
// if any of the statement is true the result will be true..for it to be false all the statements should be false

let gotBreakFast = true;
let gotLunch = true;
let gotDinner = false;

if( gotBreakFast || gotLunch || gotDinner){
    console.log('I am not starving');
}
else {
    console.log("Starving!");
}


// FUNCTIONS IN JAVASCRIPT- reusable set of instructions it lets you combine a group of instructions
function doStuff(){
    let myString = "Here is a string of text";
    let upperString = myString.toUpperCase();
    console.log(myString);
    console.log(upperString);
}
// this is calling the function telling it to do things if you forget to call it nothing will happen 
// doStuff();


// passing data to function

function printMessage(message){
    let printMessage = message.toUpperCase( )
    console.log(printMessage);
}
printMessage('here is a message');



function addNums ( num1, num2 ){
    let sum = num1 + num2;
    console.log(sum);
}

addNums(4,6)


// RETURNING DATA 
function returnSum ( num1, num2 ){
    let sum = num1 + num2;
    return sum;
}

console.log(returnSum(3,5));

// creating a random integar number
// console.log( Math.random());

/* function randomInt ( min, max){
let numOfValues = max - min + 1;
let randomNum = Math.random();
let randomVal = randomNum * numOfValues;
console.log(randomVal);
} */

// randomInt( 5,10);

// MATH FLOOR METHOD TO ROUND DOWN THE RANDOM NUMBER
let foods =['cheese','chicken', 'pizza', 'grapes', ]
function randomInt ( min, max){
    let numOfValues = max - min + 1;
    let randomNum = Math.random();
    let randomVal = randomNum * numOfValues;
    let roundedRandomVal = Math.floor(randomVal);
    let finalNum = min + roundedRandomVal
    return finalNum;
}

console.log(foods[ randomInt(0, 3) ] );

// FUNCTIONS CAN BE ANONYMOUS - you can assign a function to a variable

let greeting = function(){
    console.log("hello from the function");
}
greeting();

// DIFFERENCE BETWEEN FUNCTIONS AND METHODS 