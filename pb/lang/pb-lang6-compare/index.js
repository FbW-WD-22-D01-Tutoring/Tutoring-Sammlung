// Teil 0
let apples = 20 /* Typ Zahl */, oranges = 30;

// Extra für das Tutoring
let extraZahl = "20"; /* Typ String */
console.log(`hallo ${extraZahl}`); /* fügt eine Variable einem String hinzu */
console.log("hallo \"Hallo\""); /* \": Gibt das Zeichen Hochkommata aus und benutzt es nicht als Abschließung des Strings */


// Teil 1
console.log(apples == oranges); /* vergleicht apples und oranges: == Gibt false da beide unterschiedliche Werte haben */

// equal(Gleichheit) des "value(Wert)" checken wir mit ==
// === vergleicht den "value" und den "typen" 
console.log(apples == extraZahl); /* True, da "value" gleich */ 
console.log(apples === extraZahl); /* False, da "value" zwar gleich aber "Typ" verschieden */

// Teil 2
console.log(apples != oranges); /* vergleicht apples und oranges: != Gibt true da beide unterschiedliche Werte haben */

// not equal(Ungleichheit) des "value(Wert)" checken wir mit !=
// !== vergleicht ob "value" oder "Typ" ungleich sind 
console.log(apples != extraZahl); /* False, da "value" gleich */ 
console.log(apples !== extraZahl); /* True, da "value" zwar gleich aber "Typ" verschieden */

// Teil 3
// > "Größer als (greater than)"
// < "Kleiner als (less than)"
console.log(apples > oranges); /* False, da apples kleiner als oranges */

// Teil 4
// >= "Größer als oder gleich (greater than or equal)"
// <= "Kleiner als oder gleich (less than or equal)"
console.log(apples <= oranges); /* True, da apples kleiner als oranges */

// Teil 5
// > "Größer als (greater than)"
// < "Kleiner als (less than)"
console.log(oranges > apples); /* True, da oranges größer als apples */

// Teil 6
let mangoes = 5;
// wert 1 besteht aus mangoes * apples und wert 2 besteht aus mangoes + oranges
// da wir wert 1 und wert 2 miteinander vergleichen wollen, müssen wir die Rechnungen: "mangoes * apples" und "mangoes + oranges" in Klammern setzten (Punkt vor Strich Rechnung).
console.log(
    (mangoes * apples) > (mangoes + oranges)
); /* True, da mangoes * apples größer ist. */

// Teil 7
console.log(
    (apples - mangoes) < (oranges / mangoes)
); /* False, da apples - mangoes größer ist. */

// Teil 8
// Carinas Ansatz: Vergleicht ob alle drei Variablen den selben Wert haben (gibt nur True, wenn alle drei z.b. den Wert 2 haben)
console.log(mangoes == apples == oranges);


// Sörens Ansatz: Vergleicht ob jeder individueller Wert der Variablen gleich ist. (gibt 3 Ergebnisse)
console.log(
    mangoes == apples,
    mangoes == oranges,
    apples == oranges
);

// Teil 9
// Restwert (remainder) werden mit modulo berechnet (Rechenzeichen: %)
// bei division (divide) für Restwerte benutzen wir nicht / sondern %
console.log(
    (apples % mangoes) == (oranges % mangoes)
); /* True, da beide Rechnungen keinen Restwert besitzen (der Reswert ist 0) */

// Teil 10 
console.log(
    (apples + mangoes) > (oranges - mangoes) == false /* == false vergleicht ob die vorangegangene Rechnung false ist. Falls ja, gibt Javascript ein True als Ausgabe */
)/* True, da (apples + mangoes) > (oranges - mangoes) false ist */

// ternary operator
// ? aktion1 : aktion2
// falls vorangegangene Aussage richtig führe aktion1 aus und falls vorangegangene Aussage falsch führe aktion2 aus

console.log(apples == oranges); /* Ausgabe false */
console.log(apples == oranges ? "Ist wahr" : "Ist falsch"); /* Ausgabe unseren selbst gesetzten Wert: "falsch" */

console.log(apples != oranges); /* Ausgabe true */
console.log(apples != oranges ? "Ist wahr" : "Ist falsch"); /* Ausgabe unseren selbst gesetzten Wert: "wahr" */

// template literals
// template literals fügt eine variable einem string intern hinzu und nicht mit + 
let truth = true /* Typ boolean */, lie = false;

console.log(apples == oranges); /* Ausgabe false */
console.log(apples == oranges ? `Is ` + truth : `Is ` + lie); /* Ausgabe unseren selbst gesetzten Wert: "falsch" durch + */

console.log(apples != oranges); /* Ausgabe true */
console.log(apples != oranges ? `Is ${truth}` : `Is ${lie}`); /* Ausgabe unseren selbst gesetzten Wert: "wahr" durch interne integration im String */