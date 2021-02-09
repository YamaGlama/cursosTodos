// Function statement
function greet() {
    console.log('hi');    
}
// invoke
greet();

// Function expression
var secondGreet = function() {
    console.log('hi x2');
}
secondGreet();

// Function expression passing another function as a parameter
function log(a) {
    a();
}

log(function() {
    console.log('hi x3');
})