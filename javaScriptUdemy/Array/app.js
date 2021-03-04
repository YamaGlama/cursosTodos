var legacyArr = new Array();
var neoArr = [  // use de brackets instead curly braces
    1,
    false,
    {   // object literal
        name: 'Tony',
        address: 'Tehuacan'
    },
    function(name) {    // function expression
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];
console.log(neoArr);
neoArr[3](neoArr[2].name);