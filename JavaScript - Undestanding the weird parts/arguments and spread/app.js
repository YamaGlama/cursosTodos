function greet(firstname, lastname, language) {
    // Podemos establecer un valor por defecto
    // al agregar los parametros 

    // function greet(language = 'en') {}

    // otro truco para establecer un valor por
    // defecto es (dentro de la función):

    // language = language = 'en';

    if (arguments.length === 0) {   // checks if there are parameters
        console.log('Missing parameters!');
        console.log('----------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); // contain all the parameters that pass through the function
    console.log('argument 0: ' + arguments[0]); // just called the first argument
    console.log('----------');
}

greet();
greet('nombreUno');
greet('nombreDos', 'apellidoDos');
greet('nombreTres', 'apellidoTres', 'español');

// Spread 
function greeTwo(name, ...theOtherStuffs) {
    console.log(name);
    console.log(theOtherStuffs);
}

greeTwo('Yamalongas', 1, [0,2,6], {lastname: 'Wick', city: 'Tehuacan'}, function(){console.log('Esta es la función');})
