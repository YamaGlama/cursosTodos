// By value
var a = 3, b = a;

console.log('a = ' + a);
// Value's b is equals to a
console.log('b = ' + b);


// by reference (all objects)
var c = { greeting: 'hi '};
var d = c; // C already exists 

c.greeting = 'hello'; // Mutate

console.log(c);
console.log(d); // d is affected to the change we made before

//by reference (as a parameter)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // the change
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up a new memory space
c = { greeting: 'howdy' };
console.log(c);
console.log(d);