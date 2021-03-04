// function statement
function a() {
    console.log(this);
    this.newVariable= 'hello';
}

// function expression
var b = function() {
    console.log(this);
}

// object literal
var c = {
    name: 'the c object', // property
    log: function() {     // method
        var self = this;  // "this" points to the c object

        self.name = 'Updated c object';
        console.log(self); 

        var setName = function(newName) {
            self.name = newName;
        }
        setName('Updated again! The c object');
        console.log(self);
    }
}

a();
b();
console.log(newVariable);
c.log();