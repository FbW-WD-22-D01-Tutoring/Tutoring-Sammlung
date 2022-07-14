// 1 Minimum und Maximum

// 1.a
// lowest number wird mit Math.min(zahlen) abgefragt
console.log(Math.min(-1, 0 ,1 ,2 ,3 ,4));

// 1.b
// highest number wird mit Math.max(zahlen) abgefragt
console.log(Math.max(-1, 0 ,1 ,2 ,3 ,4));

// 2 Rounding

// 2.a
// Aufrunden tun wir mit Math.ceil(Zahl)
// einzelnd per console.log gelogt
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

// 2.a
// Aufrunden tun wir mit Math.floor(Zahl)
// zusammen in einem consol.log gelogt
console.log(
    Math.floor(3321.32321),
    Math.floor(326.76),
    Math.floor(76788.7),
    Math.floor(-9.78),
    Math.floor(28.329)
);

// 3 Dice Roll
// Random Zahlen erstellen wir mit Math.random()
// Random Zahlen werden immer mit Math.floor() gerundet

console.log(
    Math.floor(Math.random()*6)+1
);