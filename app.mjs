import chalk from "chalk";

const joke = "Tre logikere går inn i en bar. Bartenderen spør om alle vil ha en øl. Han første svarer vet ikke, han andre svarer også vet ikke, og han tredje roper JA!";

const jokeArray = joke.split(" ");

const jokeColorWords = [];

for (let i = 0; i < jokeArray.length; i++){
    jokeColorWords.push(chalk.rgb(getRandomColor(), getRandomColor(), getRandomColor())(jokeArray[i]));
}

let result = "";
for (let i = 0; i < jokeColorWords.length; i++){
    result += jokeColorWords[i] + " ";
}

console.log(result);

function getRandomColor(){
    return Math.floor(Math.random() * 256);
}

