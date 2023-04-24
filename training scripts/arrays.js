// --------------- Arrays ----------------
// ............... create array using Array() ..............

var array = new Array(10); // 10 underfined items


array[0] = 100;
array[1] = 200;
array[2] = 300;

console.log("Array length:", array.length);
console.log("Array values:" + array);


//......... create array using [] .........

var array = []; // empty array 
var array = [4, 6, 123, 1, 604, -4, 0, 123, 44];


console.log("Array: " + array);
console.log("Last item: " + array[array.length - 2]);


array[20] = 777; //change value by index
console.log("Element 20: " + array[20]);
console.log("Array length:", array.length);


// --------- Array Methods -------------

console.log("Original Array: ", array);

array.push(779); // add element to the end
console.log("Array:", array);

array.pop(); // remove the last element
console.log("Array: ", array);

array.shift(); // remove the first element
console.log("Array: ", array);

array.unshift(555); // add to the beginning 
console.log("Array: ", array);

console.log("Index of first 123:", array.indexOf(123)); // find the element from the first of array
console.log("Index of last 123:", array.lastIndexOf(123)); // find the element from the last of array


console.log("Found", array.find((elem => elem < 0))); // finding element with the special conditions

array.sort(); // sort with a default logic
console.log("Sorted by default:", array);

// compare result :
// 0 - items are equals;
// < 0 - less;
// > 0 - bigger;
array.sort((a, b) => a - b); // sort with a custom logic
console.log("Sorted with custom func:", array);

array.splice(0, 4);
console.log("After remove:", array);

const copy = array.slice(1, array.length - 1);
console.log("Copied array:", copy);


array = [4, 6, 8, 1, 13, 16, -4, 0, 99];

const filtered = array.filter((el) => el % 2 == 0);
console.log("Filtered array:", filtered);

console.log("Reversed:", array.reverse()); 

const colors = ['red', 'brown', 'yellow', 'green', 'purple'];

const str = colors.join(" ** ");
console.log("String after join: ", str);
