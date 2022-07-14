// 7
// console.log(typeof "hallo"); 
// gibt string in die Konsole und muss für die abfrage dann in "" gesetzt werden
let checkString = (string) => typeof string === "string";

console.log("\n"+"--------------"+"\n"+"Überprüfung ob der angegebene Wert ein String ist"+"\n"+"--------------");
console.log(checkString("String"));


// 8
let checkString2 = (string, string2) => typeof string === "string" && typeof string2 === "string"; /* && reiht zwar zwei Befehle aneinander aber verbindet sie auch zu einem Befehl, deshalb ist es in der Kurzform der Funktion möglich */

console.log("\n"+"--------------"+"\n"+"Überprüfung ob beide angegebenen Werte ein String sind"+"\n"+"--------------");
console.log(checkString2("Hallo", "Welt"));


// 9
let getFirstWord = (string) => /* Kurzform: */ string.split(" ")[0]; 
// .split(" ") trennt den String an den Leerzeichen und setzt die Worte dann in ein Array. [0] zieht sich dann das erste Wort aus dem Array

// Langform: {
//     let localString = string.split(" ");
//     let firstWord = localString[0];

//     return firstWord;
// }

console.log("\n"+"--------------"+"\n"+"Zieht sich das erste Wort aus dem String"+"\n"+"--------------");
console.log(getFirstWord("Internetting is hard"));