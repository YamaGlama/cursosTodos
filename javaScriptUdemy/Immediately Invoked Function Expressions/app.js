var firstname = 'Yamal',
    greeting = 'Hola ';

// Function statement
function firstGreet(name, greeting) {
    console.log(greeting + firstname);
}
firstGreet(firstname, greeting);

// using a function expression
var secondGreet = function(name, greeting) {
    console.log(greeting + name);
}
secondGreet(firstname, greeting);

// using an Immediately Invoked Function Expression (IIFE)
var thirdGreet = function(name, greeting) {
    return greeting + name
}(firstname, greeting);
console.log(thirdGreet);

// using an IIFE on the fly; the fourth greet
(function(name, greeting){
    console.log(greeting + name);
}(firstGreet, greeting));


