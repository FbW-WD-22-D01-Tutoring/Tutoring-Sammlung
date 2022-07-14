// 1
// Variablen definieren
let markHeight = 1.65, markMass = 72.5, johnHeight = 1.78, johnMass = 80.5;
console.log(markHeight, markMass, johnHeight, johnMass);

// 2
// BMI werte ermitteln
let markBMI = markMass / (markHeight**2 /* ist das gleiche wie: markHeight * markHeight */);
let johnBMI = johnMass / (johnHeight**2 /* ist das gleiche wie: johnHeight * johnHeight */);
console.log(markBMI, johnBMI);

// 3
// BMI vergleichen (markBMI größer als johnBMI)
let markMoreBeefCake = markBMI > johnBMI; /* Vergleiche geben uns immer einen boolischen Wert (true oder false) */
console.log(markMoreBeefCake);

// 4
// variable direkt mit backticks (``) in den String einfügen
console.log(`Q4: Marks BMI ist höher als Johns: ${markMoreBeefCake}`);  /* boolischer Wert aus Zeile 14 hier eingefügt */

// 5
// Zahl.toFixed(Nachkommastelle) rundet die Zahl auf die Nachkommastelle, welche in Klammern angegeben ist
if (markBMI > johnBMI){
    console.log(`Q5: Mark ${markBMI.toFixed(2)}`);
}else{
    console.log(`Q5: John ${johnBMI.toFixed(2)}`);
}