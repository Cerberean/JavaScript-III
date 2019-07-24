/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: When "this" is used in a global scope, it turns into an Object for the console.
* 2. Implicit Binding: A method used on the object gets 'this' from the object's function.
* 3. New Binding: 
* 4. Explicit Binding: 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName(name){
    console.log(this);
    return name;
}
myName("Chris");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
myObj.sayHello('Chris');

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding