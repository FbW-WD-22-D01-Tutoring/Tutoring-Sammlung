//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe.title); // mole
console.log(...Object.entries(recipe)[1]); // servings 2
console.log(Object.keys(recipe)[2]); // ingredients
for(let values of recipe.ingredients){ // einzelnen ingredients
    console.log(values);
}
// console.log(recipe.ingredients[0]);
// console.log(recipe.ingredients[1]);
// console.log(recipe.ingredients[2]);

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.



//write your code here

const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        readState: false
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        readState: false 
    }
]

for(let i = 0; i < books.length; i++){
    console.log(`${books[i].title} by ${books[i].author}`);
}

// console.log(books[0].title + " by " + books[0].author);
// console.log(books[1].title + " by " + books[1].author);

for(let i = 0; i < books.length; i++){
    if(books[i].readState /* === true nicht notwendig, da wir bereits mit boolischen werten arbeiten*/){
        console.log(`You already read "${books[i].title}" by ${books[i].author}`);
    }else{
        console.log(`You still need to read "${books[i].title}" by ${books[i].author}`);
    }
}

// if(books[0].readState){
//     console.log(`You already read "${books[0].title}" by ${books[0].author}`);
// }else{
//     console.log(`You still need to read "${books[0].title}" by ${books[0].author}`);
// }

// if(books[1].readState){
//     console.log(`You already read "${books[1].title}" by ${books[1].author}`);
// }else{
//     console.log(`You still need to read "${books[1].title}" by ${books[1].author}`);
// }