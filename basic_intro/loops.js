/* //  for loop
for( let i = 0; i <= 10; i++ ){
    console.log(i);
}

// loops are mostly used when working with arrays

let colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple']
for( let i = 0; i < colors.length; i++ ){
    console.log(colors[i]);
}

// for of..loop
let foods = ['rice', 'mokimo', 'chapati', 'ugali','salad', 'beans',];
for( let eachFood of foods ){
    console.log(eachFood);
}

// string as arrays
let myString = "here is a string of text!";
for( let i = 0; i<myString.length; i++){
    console.log(myString[i]);
}
for( let eachLetter of myString){
    console.log(eachLetter);
} */
  

// sequence string methods

let foods = ['rice', 'beans', 'chapati', 'pizza',];
let myString = "i am really hungry for some";
// console.log(`${myString} ${foods [1]}`);


// for loop
/* for( let i=0; i<foods.length; i++){
    console.log(`${myString} ${foods [i]}`);
} */

// for off loop
/* for( let eachFood of foods ){
    console.log(`${myString} ${eachFood}`);
} */

// loop + selection inside our loop we are going to check if its even or odd and if its even we will make it to uppercase
for( let i=0; i<foods.length; i++){
    let remainder = i % 2;

if (remainder === 0) {
    let foodUpper = foods[i].toUpperCase();
    console.log(`${myString} ${foodUpper}`);
}
else{
    console.log(`${myString} ${foods[i]}`);
}
}
