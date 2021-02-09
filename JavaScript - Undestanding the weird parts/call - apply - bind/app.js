var person = {
    firstname: 'Yama',
    lastname: 'Glama',
    getFullname: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(arg1, arg2) {
    console.log('Logged: ' + this.getFullname());
    console.log('Arguments: ' + arg1 + ' ' + arg2);
    console.log('---------------------------------------');
}

var logPersonName = logName.bind(person);   // Crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado.

logPersonName();

// On the fly...
var logNameV2 = function(arg1, arg2) {
    console.log('Logged x2: ' + this.getFullname());
    console.log('Arguments: ' + arg1 + ' ' + arg2);
    console.log('---------------------------------------');
}.bind(person);

logNameV2('just one argument');

logName.call(person, 'call arg 1', 'call arg 2');
logName.apply(person, ['apply arg 1', 'apply arg 2']);

// function borrowing
var person2 = {
    firstname: 'Otro',
    lastname: 'Banano'
};

console.log(person.getFullname.apply(person2));

// function currying 
// Makes a copy of a function a then set up the preset values 
function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log('this is a function currying ' + multipleByTwo(4));