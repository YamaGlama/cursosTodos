//IIFE
(function(name, greeting) {
    console.log(greeting + name);
}('Yamal el tester', greeting));    // I take de variable from the greet.js file
console.log(greeting);

// IIFE v2
(function(name) {
    var greeting = 'Hello ';    // this greeting is on a different execution context
    console.log(greeting + name);
}('Yamal the tester'));