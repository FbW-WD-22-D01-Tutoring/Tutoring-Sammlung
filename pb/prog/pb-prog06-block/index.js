// 1
let determiner = Math.floor(Math.random() * 201 - 100), x = "";

// if else
if (determiner >= 0){
    x = "Greater or equal to 0";
}else if (determiner < 0){
    x = "Less than 0";
}

console.log(determiner);
console.log(x);

// ternery

// abfrage ? passiert wenn abfrage true : passiert wenn abfrage false
determiner >= 0 ? console.log("Greater or equal to 0") : console.log("Less than 0");

// 2
let updater;

if (determiner >= 0){
    let message = "Positive Integer";
    console.log(message);
}else if (determiner < 0){
    updater = "Less than 0";
}
console.log(updater);

// console.log(message); funktioniert nicht da unsere message variable mit let definiert ist
// wenn message variable mit var definiert funktioniert es

// 3
// let message = "";
// determiner >= 0 ? message = "Positiv Integer" && console.log(message) : updater = "Less than 0";
// Man kann keine mehreren Befehele im im ternary ausführen