// --------------- Loops ----------

// While - цикл з передумовою

// syntax: while(condition) {....code....}

// Вічний цикл: цикл, в якого умова є завжди = true.

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

// ідентичне до циклу while
//  For - syntax: (initialize; condition; expression) {.....code....}

for (let i = 1; i < 10; i++) {
    if (i % 4 === 0) continue;
    console.log(`[${i}] - One more iteration...`);
    // break - end the loop;
    // continue - skips current iteration
    if (i % 7 === 0) break;
}

console.log(`a = ${a}`); // 10
// console.log(`${i}`); // is not defined

// виконати цикл, до поки користувач введе позитивне число

while (+prompt("Enter your number:") > 0) {
    console.log("Great!");
}


//  do while(): - цикл з післяумовою
// syntax: do while() {.....code....}
//  Виконує код , а потім перевіряє , чи потрібно повторно виконувати.

do {
    console.log("Request a user data...");
} while (+prompt("Enter your number:") > 0) 


    

// запросити введення числа, поки воно не буде позитивним

let number;

do {
    number = +prompt("Enter a positive number:");
} while (number < 0);

console.log("Thanks!");

// show collection of pairs  1-10, 2-9, 3-8

for (let start = 1, end =10; start <= 10; start++,--end) {
    console.log(`${start} - ${end}`);
}
    
    


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
    console.log(`Property: ${prop}`);  // username,address, id.
}  

array[12] = 40;
console.log('Array:', array);


console.log('Array values:');
for (let val of array) {
    ++val; // Змінює копію масиву, не застосовується до оригіналу.
    console.log("Value:", val);
}


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

for (let i = 0; i < 3; ++i) {
    let value = Math.floor(Math.random() * 100); // Math.floor урізає дробову частку
    prises.push(value); // [0...100] повертає випадкове число
}

for (const prise of prises) {
    console.log(`Prise: ${prise}$`);
}

// get summ of all prises in the array
let summa = 0;
for (let i = 0; i < prises.length; ++i) {
    summa += prises[i];
  
}
console.log(`Total prise: ${summa}$`); 


// get summ, when prise > 50.
let summ = 0;// локально створена, для того щоб була одна змінна на всі іттерації , а не створювалася кожен раз нова з суммою (0).
let count = 0;
/*
// 1 - USING 'FOR' LOOP
for (let i = 0; i < prises.length; ++i) {

    if (prises[i] > 50) {
        summ += prises[i];
        ++count;
    }
}
console.log("Summ:", summ / count); // використали count для підрахунку середнього арифметичного */

/*let summ = 0;// локально створена, для того щоб була одна змінна на всі іттерації , а не створювалася кожен раз нова з суммою (0).
// 2 - USING 'FOR OF' LOOP
for (const item of prises) {

    if (item > 50) {
        summ += item;
    
    }
}
console.log("Summ:", summ); */

// 3 - USING 'forEach()' method in LOOP

prises.forEach((item) => {
    if (item > 50) 
        summ += item;
    
});

console.log("Summ:", summ);




// Повторення теми циклів ********


// Цикл For більш гнучкий.






