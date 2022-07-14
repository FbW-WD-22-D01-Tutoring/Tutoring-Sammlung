// 1
// merhzeilige arrowfunktions brauchen {}
let clg3Times = (wert) => {
    for(let i = 0; i < 3; i++){
        console.log(wert);
    }
}
console.log("\n"+"--------------"+"\n"+"console.log den Wert 3 mal"+"\n"+"--------------");
clg3Times("Hallo");


// 2
// einzeiler arrowfunktions brauchen keine {}
let fivefold = (wert) => wert + wert + wert + wert + wert; /* Kurzschreibform der Funktion gibt direkt aus */

console.log("\n"+"--------------"+"\n"+"Fügt den Wert fünfach hintereinander"+"\n"+"--------------");
console.log(fivefold("Cat"));


// 3
let randomfold = (zahl, wert) => {
    let ergebnis = "";
    // zahl definiert die wiederholungen und wird mit i in der Schleife verglichen
    for(let i = 0; i < zahl; i++){
        ergebnis = wert + ergebnis; /* Kurzform: ergebnis += wert */
    }

    // ohne Kurzschreibform der Funktion brauchen wir ein Ausgabebefehl in form von return
    return ergebnis;
}

console.log("\n"+"--------------"+"\n"+"Fügt den Wert x-fach hintereinander"+"\n"+"--------------");
// randomfold(3, "Woah"); schreibt den string "WoahWoahWoah" ins JavaScript
console.log(randomfold(3, "Woah"));