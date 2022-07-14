function validation(x, y) {
    
    let ergebnis = typeof x === "number"; /* Zahl zu multiplizieren */
    let ergebnis2 = typeof y === "number"; /* Multiplikator */
    let localX = x /* speichert x in einer neuen Variable, damit wir den Ursprung x nicht überschreiben, falls wir ihn später weiter benötigen */
    let localXErgebnisse = localX

    if(ergebnis === true && ergebnis2 === true) { /* && sagt das beide angaben true sein müssen */

        for (let i = 1; i < y; i++){
            localX *= x /* *= multipliziert die linke Variable mit der rechten Variable und speichert diese neu in dem Namen der linken Variablen */ /* bedeutet hier 2 * 2 * 2 * 2 * 2 = 32 */
            localXErgebnisse += " " + localX; /* mit += addieren wir die linke variablen mit der rechten und speichern das ergebnis in der linken variable, bei strings werden diese nacheinander aufgereiht. bei Zahlen wird der vorherige Wert überschrieben, bei Strings wird der neue Wert einfach nur hinten an den alten Wert angehängt */
        }
    }
    
    return localXErgebnisse
}

console.log(validation(3.5, 7));