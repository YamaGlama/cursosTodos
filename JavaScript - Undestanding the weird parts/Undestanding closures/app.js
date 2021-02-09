function greet(whattosay) {
    
    return function(name) {
        console.log(whattosay + ' ' + name); // whatosay is in the aouter enviroment reference; in the greet function
    }
}

// A way to call the previous function
greet('Hi')('Yama Glama');

// Other way to call it
var sayHi = greet('Hi');
sayHi('Yamal Dos');

