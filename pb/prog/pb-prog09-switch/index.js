const COLORS = ["red", "blue", "green", "yellow"];
let color = COLORS[2];

switch (color){
    // case kontrolliert ob der wert mit dem der Klammer von switch übereinstimmt
    case "red":
        console.log("Q1: Red's a great color on you.");
        break;

    case "blue":
        console.log("Q1: Blue? Great choice.");
        break;

    case "green":
        console.log("Q1: Ok. Green it is.");
        break;

    // case ist unser if
    case "yellow":
        console.log("Q1: Not what I would have picked, but yellow is fine.");
        break;

    // default ist unser else
    default:
        console.log("Q1: The aim of the game is to pick a color.");
        break;
}

// ist das selbe wie oben nur als if/else

// if (color === "red"){
//     console.log("Q1: Red's a great color on you.");
// }else if (color === "blue"){
//     console.log("Q1: Blue? Great choice.");
// }else if (color === "green"){
//     console.log("Q1: Ok. Green it is.");
// }else if (color === "yellow"){
//     console.log("Q1: Not what I would have picked, but yellow is fine.");
// }else{
//     console.log("Q1: The aim of the game is to pick a color.");
// }

// 0 == "0" // gibt true da nur die werte verglichen werden
// 0 === "0" // gibt false da wert und typ verglichen werden

// 4
let percentageComplete = 51;

switch (true){
    case (percentageComplete < 30):
        console.log("Q4: Still a long way to go");
        break;

    // && sagt nur wenn beide Bedingungen erfüllt sind führe den code aus
    case (percentageComplete >= 30 && percentageComplete <= 50):
        console.log("Q4: Slowly getting there");
        break; /* NIEMALS das break vergessen, da sonst der folgende code bis zum nächsten break ausgeführt wird */

    case (percentageComplete > 50 && percentageComplete <= 80):    
        console.log("Q4: You can do it!");
        break;

    case (percentageComplete > 80 && percentageComplete <= 99):
        console.log("Q4: This is the last push!");
        break;

    case (percentageComplete === 100):
        console.log("Q4: You're there. Well done!");
        break;
}