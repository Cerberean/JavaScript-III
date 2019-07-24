/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: When "this" is used in a global scope, it turns into an Object for the console.
* 2. Implicit Binding: A method used on the object gets 'this' from the object's function.
* 3. New Binding: A constructor function which uses 'this' will refer to the specific code of an object which is created and returned by the constructor function.
* 4. Explicit Binding: "this" becomes more defined when using JS call or apply method.
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
const person = {
    greeting: 'Hello',
    speak: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
person.speak('Chris');

// Principle 3

// code example for New Binding
function human(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  const adam = new human('Eve');
  const eve = new human('Adam');
  
  adam.speak();
  eve.speak();

// Principle 4

// code example for Explicit Binding
adam.speak.call(eve); eve.speak.apply(adam);