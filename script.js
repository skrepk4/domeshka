let result = 5 + 5 + `5`;
console.log(result);

const email = "artembaa8@gmail.com";
let includesSymbol = email.includes("@");
let length = email.length;

console.log("Мiстить символ @ :" , includesSymbol);
console.log("Загальна кiлькiсть символiв :" , length);

const word = "My";
const word2 = "name";
const word3 = "is";

let fullName = word + " " + word2 + " " + word3;

fullName += " Viktor";

console.log(fullName);

let userName = "Олександро";
let payment = 300

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)