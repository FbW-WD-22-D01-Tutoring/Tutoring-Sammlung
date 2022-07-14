// Q1
let umsatzTickets = 6450, 
    preisTicket = 15;

console.log((umsatzTickets / preisTicket) + " Tickets wurden verkauft.");

// Q2
let wochenGehalt = 500;

console.log((wochenGehalt * 52) + "$ verdient Sylvia jährlich.");

// Q3
// Berechnung mit Objekten
// Key = "Value" werden mit = getrennt
let percentageNumbers = {
    /* Key: "Value" werden in Objekten mit : getrennt */
    zaehler: 17,
    nenner: 30,
    percentage: 100,
},
    percentageResult = percentageNumbers.zaehler / percentageNumbers.nenner * percentageNumbers.percentage;

console.log(percentageResult + "%");

// Q4
let squareSide = 4.75, 
    squarePerimeter = squareSide * 4;

console.log("The perimeter is: " + squarePerimeter + "cm");

// Q5
// Berechnung mit Array
let triangleSide = [5, 6, 7], 
    trianglePerimeter = triangleSide[0] + triangleSide[1] + triangleSide[2]; /* Array Values werden mit Key[Position des Values(in Javascript startet das zählen der Position mit 0)] angesprochen */

console.log("The perimeter is: " + trianglePerimeter + "cm");

// Q6
let squareSide2 = 5, 
    squareArea = squareSide2 * squareSide2;
console.log("The area is: " + squareArea + "cm²");

//Q7
// Berechnung mit Objekten
// Key = "Value" werden mit = getrennt
let triangleSides = {
    /* Key: "Value" werden in Objekten mit : getrennt */
    sideA: 3,
    sideB: 4,
},
    triangleArea = triangleSides.sideA * triangleSides.sideB / 2;

console.log("The area is: " + triangleArea + "cm²");

// Q8
let cubeSide = 9,
    cubeVolume = cubeSide * cubeSide * cubeSide;

console.log("The Volume is: " + cubeVolume + "cm³");

// Q9
let 
    // Array Ansprechen mit key[position] für Array
    bills = [22.35, 26.67, 35.92],
    // Object Ansprechen mit key.key für objekte
    calculatedBills = {
        bill1: bills[0] * 1.10, /* 1.10 sind 10% auf den Ursprungswert oben drauf */
        bill2: bills[1] * 1.15, /* 1.15 sind 10% auf den Ursprungswert oben drauf */
        bill3: bills[2] * 1.20, /* 1.20 sind 10% auf den Ursprungswert oben drauf */
    };

console.log("the calculated bills are:", calculatedBills.bill1 + "€", calculatedBills.bill2 + "€", calculatedBills.bill3 + "€");