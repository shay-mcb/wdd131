// 1. Javascript Arrays
//              0           1           2
let names = ["Nathan", "Makenzie", "Marcus"]; // this is how you write an array in js
console.log(names);
console.log(names[1]); // call back the specific item by its index number (always starts at 0)
console.log(names[3]); // if this doesn't exist it returns as 'undefined'

// How do we return the last element in an array?
console.log(names[names.length -1]);

let ages = [8, 6, 2]; // arrays can hold numbers

let mixArray = ["Nathan", 8, "Makenzie", 6, "Marcus", 2]; // this is bad practice lol
console.log(mixArray);

// 2. Javascript Objects
// it's better to put these all together than have them separate
let studentName = "Bob";
let studentClass = "WDD131";

// Literal objects (define object structure and put values in it)
let student = {
    // key/ value pairs
    name : "Bob",
    class : "WDD131",
    grade: "A",
    age : 27
}
console.log(student);
console.log(student.class);

// Why is this useful?
// You can create an array of objects that are stored and pulled from later

// 3. Array Methods
names.forEach((name) => {
    // this code executes once per each item in the array
    console.log(name);
})

// Map function returns a NEW array with values returned from function
let newNameArray = names.map((name) => {
    return name + " McBride"; //adding on the last name to each name in the list
})
console.log(newNameArray);

// Filter function returns a new array with filtered values
let filteredArray = names.filter((name) =>{
    // filter returns boolean. True keep, false don't keep.
    return name[0] === 'N';
})
console.log(filteredArray); // should only return "Nathan"

// .reduce()- creates a new array filled with elements that pass a test provided by function
const numbers = [125, 20, 5];

document.getElementById("output").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(numbers);

// .indexOf()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

// Template Literals
const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${stars}</p>
  </div>
`;

document.getElementById("movie-list").innerHTML += movieSummary;  