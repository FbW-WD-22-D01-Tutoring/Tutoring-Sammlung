import * as percentage from "./percentage.js";
import { calculateAspectRatio } from "./aspect-ratio.js";

// modulo
// Container
const moduloCon = document.getElementById("modulo-form");

moduloCon.addEventListener("change", () => {

    // Eingabe Inputs
    // Nodeliste wegen querySelectorAll
    const inputs = document.querySelectorAll("input.arithmetic");

    // Result Input
    const result = document.getElementById("modulo_result");

    // Funktionsausführung mit Speicherung in Result Input
    // inputs[index].value aus der Nodeliste
    result.value = percentage.modulo(inputs[0].value, inputs[1].value);
})


// percentage
// Container
const percentageCon = document.getElementById("percentage-form");

percentageCon.addEventListener("change", () => {

    // Eingabe Inputs
    // Nodeliste wegen querySelectorAll
    const inputs = document.querySelectorAll("input.percentage");

    // Result Input
    const result = document.getElementById("percentage_result");

    // Funktionsausführung mit Speicherung in Result Input
    // inputs[index].value aus der Nodeliste
    result.value = percentage.percentage(inputs[0].value, inputs[1].value);
})


// percentageOf
// Container
const percentageOfCon = document.getElementById("percentageOf-form");

percentageOfCon.addEventListener("change", () => {

    // Eingabe Inputs
    // Nodeliste wegen querySelectorAll
    const inputs = document.querySelectorAll("input.percentageOf");

    // Result Input
    const result = document.getElementById("percentageOf_result");

    // Funktionsausführung mit Speicherung in Result Input
    // inputs[index].value aus der Nodeliste
    result.value = percentage.percentageOf(inputs[0].value, inputs[1].value);
})


// difference
// Container
const differenceCon = document.getElementById("difference-form");

differenceCon.addEventListener("change", () => {

    // Eingabe Inputs
    // Nodeliste wegen querySelectorAll
    const inputs = document.querySelectorAll("input.difference");

    // Result Input
    const result = document.getElementById("difference_result");

    // Funktionsausführung mit Speicherung in Result Input
    // inputs[index].value aus der Nodeliste
    result.value = percentage.difference(inputs[0].value, inputs[1].value);
})


// aspect ratio
// Container
const aspectRatioCon = document.getElementById("aspect-form");

aspectRatioCon.addEventListener("change", (event) => {

    // alle 4 inputs
    const inputs = document.querySelectorAll("input.ratio");

    if(event.target.classList.contains("height")){

        // Funktion bekommt die ersten beiden inputs und den 4ten input und verändert für dich den 3ten input
        inputs[2].value = calculateAspectRatio(inputs[0].value, inputs[1].value, inputs[3].value , "h");
    }else{
        
        // Funktion bekommt die ersten beiden inputs und den 3ten input und verändert für dich den 4ten input
        inputs[3].value = calculateAspectRatio(inputs[0].value, inputs[1].value, inputs[2].value , "w");
    }
})