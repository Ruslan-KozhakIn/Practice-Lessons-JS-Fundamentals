// --------------------Classes----------

// class + object prototype


class Car {
//   private fields (can access only inside this class)
    
    #speed;    // # - private field

    
    
  
//  initialize the object with values 
    constructor(model, color, power, year) {
        // create properties
        this.model = model;
        this.color = color ?? "no color";
        this.power = power;
        this.year = year;
        this.#speed = 0;
    }    
        // methods
    show() {
        document.write(`<p>Car: ${this.model},${this.color}, ${this.power}hp, ${this.year}</p>`)
    }
      /*  // getter / setter
    getMiles() {
        return (this.speed * 0.621371).toFixed(1); // toFixed()  скорочує певну кількість знаків після коми 
    }
    setSpeed(value) {
        // validation
        if (value >= 0 && value < 220)
            this.speed = value;
        else console.warn("Invalid speed!");
    } */

        // getter / setter
    get miles() {
        return (this.#speed * 0.621371).toFixed(1); // toFixed()  скорочує певну кількість знаків після коми 
    }
    set speed(value) {
        // validation
        if (value >= 0 && value < 220)
            this.#speed = value;
        else console.warn("Invalid speed!");
    }
}


//  create instance: new Type(params);
let hisCar = new Car("Audi A8", "Red", 240, 2012); // invoke constructors
let herCar = new Car("Nissan Tilda", null, 106, 2017); // invoke constructors

// set
// hisCar.setSpeed = -30;  //bad practice, use methods instead
hisCar.speed = 67;        // hisCar.setSpeed(67);
hisCar.speed = -300;     // hisCar.setSpeed(-300);  // ignore!
// hisCar.#speed = 550;  // private
// hisCar._speed = 550;  // звертання через змінну замість get or set ломає код
// console.log(`${hisCar.getMiles()} miles`); 
console.log(`${hisCar.miles} miles`); 

hisCar.show();
herCar.show(); 

// ------------- inheritance -------------

class PoliceCar extends Car {
     //  this class already has all Car member
    //  we add additional members 
   //     super - reference to the parent object
    constructor(model, color, power, year, volume) {
        // invoke base constructor
        super(model, color, power, year);
        
        this.volume = volume >= 0 ? volume : 0;
    }

    beep() {
        console.log(`Beep.. b${'e'.repeat(this.volume)}p${'!'.repeat(this.volume)} Stop!`);


    }
//    override the base method
    show() {
        document.write(`<h4>Police Car</h4>`)
    //   document.write(`<p>Car: ${this.model},${this.color}, ${this.power}hp, ${this.year}</p>`)
        super.show(); // invoke base show method
    }
}

const policeCar = new PoliceCar('Toyota Prius', 'white', 145, 2016, 3);
policeCar.beep();
policeCar.show();