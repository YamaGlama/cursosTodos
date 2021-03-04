var Yamal = {
    firstName: 'Yamal',
    lastName: 'Márquez',
    address: {
        street: 'Privada Los Reyes',
        city: 'Tehuarancho',
        state: 'Puebla'
    }
};

function greeting(person) {
    console.log('Hi ' + person.firstName);
};

greeting(Yamal);
greeting({
    firstName: 'Ken',
    lastName: 'Márquez'
});