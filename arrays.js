
// PUSH- add an element at the end
let food =["rice", "pilau", "beans", "beef",];
food.push("chicken");
console.log(food);



//   POP-removes the last element of an array and gives you the remaining elements as the results.
let fruits = ["Apple", "Orange", "Pear"];
fruits.pop();
console.log(fruits);


// SHIFT- extracts the first element of an array and give you the element extracted as the results
let names = ["rose", "tracy", "sam", "nancy", "hazel",];
names.shift();
console.log(names);


// UNSHIFT-add an element at the beginning of an array
let colors = ["purple", "brown", "yellow", "indigo", "blue", "green",];
colors.unshift("black");
console.log(colors);


// SPLICE- it removes items from array/ at the same time it can add items
let schools = ["kimathi", "nyeri", "karatina", "kenyatta", "jkuat",];
// from index 1 remove two items and add the other names
schools.splice(1,2,"matiliku", "kathonzweni"); 
console.log(schools);

// it can also add items without removing them

// SLICE-it creates sub arrays. it gives you the result of the sliced items
let towns = ["nairobi", "kisumu", "loitokitok", "nakuru", "mombasa", "nanyuki"];
let slicedTowns = towns.slice(1,3);

console.log(slicedTowns);


// REDUCE -

let shopping = [
    {item: "milk", price: 450},
    {item: "carrot", price: 200},
    {item: "rice", price: 900},
    {item: "beans", price: 500},
    {item: "gas", price: 1050},
    {item: "bread", price: 40},
    {item: "car", price: 5000},
    {item: "mirror", price: 900}
]

let totalPrice = shopping.reduce((acc, item)=> {
return acc + item.price
}, 0)

console.log(totalPrice);

// FILTER- it looks for a single element that makes it return true

let items = [
    {name: "television", price: 2000},
    {name: "carpet", price: 350},
    {name: "couch", price: 220},
    {name: "computer",price: 450},
    {name: "table", price: 800}
];
let someItems = items.filter((item, index)=> item.price < 500);
console.log(someItems);