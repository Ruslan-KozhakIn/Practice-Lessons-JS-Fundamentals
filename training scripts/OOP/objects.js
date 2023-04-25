// ------------objects----------

/* objects comtains:
- properties(data);
- methods (behavior);
*/

let username = 'vladtymo';
let email = 'vlad11@gmail.com';
let address = 'Rivne, Ukraine';
let isAdmin = true;
let birthdate = new Date(1990, 0, 10);

function showUser(username, email, address, isAdmin) {
    console.log(`User [${username}]: ${email}, status: ${isAdmin ? 'Admin' : 'User'}`);

}

showUser(username, email, address);


// create object


























// ---------function constructors

function Account(login, password) {
// create properties 
    this.login = login;
    this.password = password;
    this.isAdmin = false;
    this.show = function () {
        console.log(`Account: ${this.login}`);
        
    }
}

const baseAccount = new Account("super1122", "Qwerty"); 
const otherAccount = new Account("bob99", "TestTest"); 

baseAccount.show();
