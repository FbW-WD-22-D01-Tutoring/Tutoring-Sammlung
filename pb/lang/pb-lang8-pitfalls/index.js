// 1 NaN

console.log("NaN ist die kurzform von: Not a Number");

// 1*
// checken nach NaN wird mit Number.isNaN(value) ausgeführt

// wird nicht benutzt
console.log(isNaN("hello")); /* Fragt danach ob der Value not a Number ist (nicht nach der Nummer mit dem Wert NaN) */ /* gibt true da "hello" keine Nummer ist */ 

console.log(isNaN(3)); /* gibt false da eine Nummer */

// wird benutzt
console.log(Number.isNaN("hello")); /* eine Variante das abzufragen */ /* Fragt explizit nach der Nummer mit der bezeichnung NaN */ /* gibt false da "hello" nicht die Nummer mit der Bezeichnung NaN ist */


// 1**
console.log(Number.isNaN(3)); /* gibt auch false da 3 zwar eine Nummer aber nicht die Nummer mit der Bezeichnung NaN */

// Zusatz 
console.log(Number.isNaN(NaN)); /* gibt true da es die Nummer mit der Bezeichnung NaN ist */

console.log("hello" == NaN); /* eine andere Variante das abzufragen */

console.log(NaN == NaN); /* gibt trotzdem false da NaN nie gleich NaN ist */
console.log(NaN === NaN); /* gibt trotzdem false da NaN nie gleich NaN ist */

// 1***
//der typ wird mit typeof abgefragt
console.log(typeof NaN);



// 2
console.log(0.1 * 0.2);
// Runden auf bestimmte kommastellen wird mit zahl.toFixed(Nachkommastellen)
let fixedNumber = (0.1 * 0.2).toFixed(2); /* wird als String ausgegeben */
console.log(typeof fixedNumber);
console.log(fixedNumber);

// Umwandeln des Strings in eine Zahl mit parseInt() oder parseFloat()
// parseInt() für Ganzzahlen
// parseFloat() für Kommazahlen
// wir benutzen parseFloat(), da wir eine Kommazahl haben
let fixedNumberTransformed = parseFloat(fixedNumber)
console.log(typeof fixedNumberTransformed);
console.log(fixedNumberTransformed);