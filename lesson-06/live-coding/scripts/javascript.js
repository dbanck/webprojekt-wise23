console.log("Hello");

console.log("JS lädt und läuft");

// einzeiliger kommentar
console.log("Hallo");

// alert("Hallo"); // pauses programm

/*
 *
 *
 *
 * mehrzeilige Kommentare
 *
 *
 */

let salt;
let pepper = "Pfeffer";

let camelCasing;
let bastiBuck;

const daysInWeek = 7;

console.log(pepper);

pepper = "Salz";

console.log(pepper);

console.log(daysInWeek);

// daysInWeek = 10;

// console.log(daysInWeek);

const basePrice = 10;

let price = basePrice * 3;

console.log(price);

// Bedingungen / conditionals
console.log("--------------------");

let newPrice = basePrice;
const age = 33;

if (age < 10) {
  newPrice = 5;
} else if (age > 65) {
  newPrice = 7;
} else {
  newPrice = basePrice;
}

console.log(newPrice);

// Funktionen
console.log("--------- Functions -----------");

function sayHello(firstName) {
  // function body
  let msg = "Hello ";

  console.log(msg + firstName);
}

sayHello("Basti");
sayHello("Katja");
sayHello("Sophie");

// Function mit return
console.log("--------- Functions return values -----------");

// moved to calculator.js!!!!

// function calculatePrice(age) {
//   let calculatedPrice;

//   if (age < 10) {
//     calculatedPrice = 5;
//   } else if (age > 65) {
//     calculatedPrice = 7;
//   } else {
//     calculatedPrice = 10;
//   }

//   return calculatedPrice;
// }

let child = calculatePrice(4);
let adult = calculatePrice(40);
let rentner = calculatePrice(80);

// let someVariable;
// console.log(someVariable); // ==> undefined, weil kein Wert initialisiert / zugewiesen wurde

console.log(child);
console.log(adult);
console.log(rentner);
