// ----------- if statements ----------

let age = +prompt("Enter your age:");

if (age >= 18) {
    console.log("You can drink wine!");
}
else if (age >= 16) {
    console.log("You can drink beer!");
}
else {
    console.log("You can drink milk!");
}


// ternary operators: (condition) ? true : false
let result = (2 + 2 * 2 == 6) ? 'Good' : 'Bad';
// result: string = 'Good'
console.log(result);


let isProgrammer = confirm('Are you programmer?');

alert(`Let's ${(isProgrammer) ? 'learn JavaScript' : 'play football'}`);


// ------- switch ------

const weekday = +prompt('Enter weekday number:');

switch (weekday) {
    case 1: console.log('Today is Monday');
    break;
    case 2: console.log('Today is Tuesday');
    break;    
    case 3: console.log('Today is Wednesday');
    break;    
    case 4: console.log('Today is Thursday');
    break;    
    case 5: console.log('Today is Friday');
    break;    
    case 6: console.log('Today is Saturday');
    break;    
    case 7: console.log('Today is Sunday');
    break;
        

    default:
        console.warn('Invalid weekday number!');
        
}

switch (weekday) {
    case 1: case 2: case 3: case 4: case 5: 
        console.log("Today is a working day!"); break; 
    
    case 6: case 7: console.log('Today is a weekend!');
    break;
        

    default:
        console.warn('Invalid weekday number!');
        
}