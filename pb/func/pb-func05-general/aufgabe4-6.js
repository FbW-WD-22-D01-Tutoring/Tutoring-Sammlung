// 4
let numbers = [1,6,83,91,0,-4,1337,5];

let largestNumber = (array) => Math.max(...array); /* (...arrayname) sucht sich die Maximalzahl aus dem array raus */

console.log("\n"+"--------------"+"\n"+"gibt die maximale Zahl aus einem Array aus"+"\n"+"--------------");
console.log(largestNumber(numbers));


// 5.1
let printIfDivisibleByTen = (zahl) => {
    if(zahl % 10 === 0){
        console.log("Even 10!");
    }
}

console.log("\n"+"--------------"+"\n"+"Zahl durch 10 teilbar"+"\n"+"--------------");
printIfDivisibleByTen(10);

// 5.2
console.log("\n"+"--------------"+"\n"+"Zahl durch 10 teilbar bis 125"+"\n"+"--------------");
for(let i = 1; i <= 125; i++){ /* i startet bei 1 und nicht bei 0, da 0 % (modulo) 10 auch 0 ergibt und wir das nicht wollen */
    printIfDivisibleByTen(i);   
}


// 6
let largestNumber2 = (num1, num2, num3, num4, num5) => Math.max(num1, num2, num3, num4, num5);

console.log("\n"+"--------------"+"\n"+"Höchste Zahl"+"\n"+"--------------");
// console.log(Math.max(1, 2, 3, 4, 5));
console.log(largestNumber2(1, 2, 3, 4, 5));