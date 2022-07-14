function calculateBMI(name, weight, height) {
    let bmi = weight / (height * height);

    return `${name} ${bmi.toFixed(2)}`; // 25,234556 wird zu 5,23 dank .toFixed(2)
}

// Funktion mit dem Namen whoIsBiggest(Parameter) und 6 Parametern/Angaben in den Klammern
function whoIsBiggest(Person1Name, Person2Name, Person1Weight, Person2Weight, Person1Height, Person2Height) {
    let bmiOne = calculateBMI(Person1Name, Person1Weight, Person1Height); /* Aufruf unserer Funktion */
    let bmiTwo = calculateBMI(Person2Name, Person2Weight, Person2Height);

    bmiOne = bmiOne.split(" "); /* .split trennt ein string an den Stellen die in den Klammern angegeben sind und speichert sie in einem neuen Array */
    bmiTwo = bmiTwo.split(" "); 

    bmiOne = bmiOne.reverse(); /* .reverse dreht das Array um */
    bmiTwo = bmiTwo.reverse();

    bmiOne = bmiOne[0] /* Index 0 gibt nach dem reverse immer die Zahl an */
    bmiTwo = bmiTwo[0]

    // vorherige whoIsBiggest Funktion
    if(bmiOne > bmiTwo){
        return Person1Name;
    }else{
        return Person2Name;
    }

    console.log(bmiOne, bmiTwo); /* Ausgegrauter code z.b. nach return oder break wird niemals erreicht (niemals ausgeführt) */
}

console.log(whoIsBiggest("Max Musterman", "Marie", 60, 75, 1.65, 1.75));