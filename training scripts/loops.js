// --------------- Loops ----------

// While - цикл з передумовою

// syntax: while(condition) {....code....}


// Вічний цикл
// while (5 > 2) {
    // iteration - один прохід цикла
    // console.log("One more iteration...");
// }

let a = 1; // initialize
while (a < 10) { //condition
    //  iteration - один прохід цикла
    console.log(`[${a}] - One more iteration...`);
    a++ // expression
 }

console.warn("Finish!");

// шдентичне до циклу while
//  For - syntax: (initialize; condition; expression) {.....code....}

for (let i = 1; i < 10; i++) {
 console.log(`[${i}] - One more iteration...`);   
}

console.log(`a = ${a}`); // 10
// console.log(`${i}`); // is not defined

// виконати цикл, до поки користувач введе позитивне число

while (+prompt("Enter your number:") > 0) {
    console.log("Great!");
}


//  do while(): - цикл з післяумовою
// syntax: do while() {.....code....}

do {
    console.log("Request a user data...");
}while (+prompt("Enter your number:") > 0) 
    

// запросити введення числа, поки воно не буде позитивним

let number;

do {
    number = +prompt("Enter a positive number:");
} while (number < 0);

// for in - iterate all object keys
// syntax: for(variable in object) {}
let array = [4, 6, 2, 6, -8, 0, 85, 120, 3];
let user = {
    username: 'bob228',
    address: 'Rivne , Ukraine',
    id: 22
};
console.log('Array indexes:');
for (let ind in array) {
    console.log(`Key: ${ind}`); // 0....8
}

console.log('User properties:');
for (const prop in user) {
    console.log(prop);
} 

console.log('Array values:');

let newArray = [];

//  for of - iterate all values of the  object

for (let elem of array) {
    ++elem; // change copy, do not effect to original array
    console.log(`Element: ${elem}`); // 0....8
    newArray.push(elem);
}
    


// практичне використання

let prises = [];
// додати в масив 10 цін з випадковим значенням від 0 до 100

for (let i = 0; i < 10; ++i) {
    let value = Math.floor(Math.random() * 100); // урізає дробову частку
    prises.push(value); // [0...100] повертає випадкове число
}

for (const prise of prises) {
    console.log(`Prises: ${prise}$`);
}

// get summ of all prises in the array
let summa = 0;
for (let i = 0; i < prises.length; ++i) {
    summa += prises[i];
  
}
console.log(`Total prises: ${summa}$`);








