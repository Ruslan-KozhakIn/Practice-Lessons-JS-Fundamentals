//-----------Functions-----------

// ............Function declaration: function name(parameters) {....body....}

/*function greeting() {
    console.log('Hello everyone!');
}

// function invokation : name();
greeting();

function showArea(width, height) {
    console.log("Rectangle area:", width * height);
}

showArea(10, 5);
showArea(1, 20);
showArea(0, 0);

function showRandomNumber(min = 1, max = 10) {

    let value = min + Math.random() * (max - min);
    let integer = Math.floor(value); // перетворення дробового числа в ціле 
    console.log(integer); //0......max
}

showRandomNumber(10, 20);
showRandomNumber(90, 100);
showRandomNumber(3); // 3....10
showRandomNumber(); // 1....10

let res = showRandomNumber(); // return undefined
console.log(res); // undefined 


// return operator - повертає значення з функції

function getSumm(a, b) {
    return a + b;
}
console.log('Result:', getSumm(4, 7));
alert('Result: ' + getSumm(4, 7));


//  function expression: function() {.....body....}

const summ = function (a, b) {
    console.log(`Results: ${a + b}`);
};
//  arrow functions: () => { }
const mult = (a, b) =>  {
    console.log(`Results: ${a + b}`);
};

console.log('Type of summ: ', typeof (summ));
summ(3, 6);


//  anonymous function usage

function changeArray(array, modify) {
    for (let i = 0; i < array.length; ++i) {
        array[i] = modify(array[i]);
    }

}

let arr1 = [2, 4, 6, 7, 8];
let arr2 = [3, 5, 9, 11, 23];

 function increment(n) {
     return n + 1;
 }

changeArray(arr1, increment);                 //  using declared function
changeArray(arr1, function(n){return n + 1}); //  using expression
changeArray(arr2, (n) => n -1);               //  using arrow

console.log('arr 1 changed:', arr1);
console.log('arr 2 changed:', arr2); */

  
// REMEMBERING FUNCTIONS

// Функція для того , щоб можна було викликати
// певний блок кода по імені не копіюючи його!

function showMessage() {
    console.log("I like JavaScript!");
}

showMessage(); // викликання ф-ції по імені, щоб вона спрацювала.


// function to show a random value 0-10



function showRandomNumberTo10() {   //назва ф-ції відповідає дії, ку вона виконує set - встановлюємо,check, show, get - повертаємо(return);
    console.log(Math.floor(Math.random() * 11))

}               

showRandomNumberTo10();

// function parameters: name(param1, param2) {.......}

function showRandomNumberToMax(max) {   //назва ф-ції відповідає дії, яку вона виконує set - встановлюємо,check, show, get - повертаємо(return);
    console.log(Math.floor(Math.random() * max + 1))

}               

showRandomNumberToMax(100);
showRandomNumberToMax(30);

// show count of value in the array


const arr = [3, 6, 1, 3, 7, 3, 8, 2, 3, 8];
const prices = [140, 10, 44, 10, 120, 5, 44, 44];

function showCount(array, value) {
    
    alert("Value count: " + array.filter((i) => i === value).length);

}

console.log("Random value: " + getRandomNumberInRange(0, 10)); // hoisting - спливання функції до її оголошення .

showCount(arr, 3);
showCount(prices, 44);


// return operator: повертає значення з ф-ції і виходить з неї---------.

function getRandomNumberInRange(min, max) {   //назва ф-ції відповідає дії, яку вона виконує set - встановлюємо,check, show, get - повертаємо(return);
   // console.log("Before return!");
    return Math.floor(min + Math.random() * (max - min + 1));
    // console.log("After return!"); // не спрацює, бо фу-ція завершилась. 

}    

//  showRandomNumberInRange(10, 20);
// showRandomNumberInRange(80, 100);
 
// initialize array with random value (10...40)

for (i = 0; i < prices.length; i++) {

    prices[i] = getRandomNumberInRange(10, 40);
}


console.log("Prices: ", prices);

alert(getRandomNumberInRange(10, 40));

console.log(getRandomNumberInRange(10, 40));



function getRandomNumberInRange(min = 0, max = 10) {  // дефолтні параметри 
    return Math.floor(min + Math.random() * (max - min + 1));
}

console.log("Random value: " + getRandomNumberInRange());
//  same result
console.log("Random value: " + getRandomNumberInRange(0, 10));


// hoisting змінних
console.log(salary);
var salary = 1200;
console.log(salary);

//  ******  callback фун-ції - передавання фу-ції у функцію .



// function getModule(x) { return Math.abs(x); }; // модуль числа ( від'ємне значення переведе у позитивне)
function getSqrt(x) { return Math.sqrt(x); }; // корінь квадратний
// function getNegative(x) { return -x; };


function changeArray(array, action) {
    for (let i = 0; i < array.length; i++) {
    array[i] = action(array[i]);
    
    }
}

let members = [4, 5, 7, -5, 80, 22];
changeArray(members, getIncrement);
// changeArray(members, getModule);
// changeArray(members, getNegative);




// 1 - Function declaration  
function getIncrement(x) { return x + 1; };


// 2 - Function expression 
const getNegative = function (x) { return -x; };

// 3 - anonymous functions

changeArray(members, function (x) { return Math.abs(x); });// модуль числа ( від'ємне значення переведе у позитивне) 
changeArray(members, function (x) { return x * x; });


// 4 - arrow functions 

changeArray(members, (x) => x * 2);

console.log("Change array: ", members);