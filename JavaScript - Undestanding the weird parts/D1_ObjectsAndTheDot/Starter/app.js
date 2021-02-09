var person = new Object();
person["firstName"] = "Yamal";
person["lastName"] = "Márquez";

var fisrtNameProperty = "firstName";

console.log(person);
console.log(person[fisrtNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "p sherman calle wallaby 42 sydney";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);