function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

var greetSpanish = makeGreeting('es');
var greetEnglish = makeGreeting('en');

greetSpanish('Yamal', 'Marquez');
greetEnglish('John', 'Wick');