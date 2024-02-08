// This assignment is inspired by a problem on Exercism (nod) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

 function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
			break; 
		 }
 
	  }
	}
	return letterPoints;
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! \n\n Enter a word to score: ")

   // Score the word using oldScrabbleScorer()
  let score = oldScrabbleScorer(word);

   console.log(`${score}`);
};

// Simple Scorer Function
function simpleScorer(word){
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i=0; i < word.length; i++){
      letterPoints += 1;
   }
return letterPoints;
}

// Vowel Scorer Function
function vowelBonusScorer(word){
   word = word.toUpperCase();
   let letterPoints ="";
   for (let i=0 ; i < word.length; i++){
      if ("AEIOU".includes(word[i])){
      letterPoints += 3;
   } else {
      letterPoints += 1;
   }
}
return letterPoints
}

let scrabbleScorer;

// scoringAlgorithms array to retrieve information about the three scoring algorithms and convey that information to the user.
const scoringAlgorithms = [
   {
     name: "Simple Score",
     description: "Each letter is worth 1 point.",
     scoreFunction: simpleScorer
   },
   {
     name: "Bonus Vowels",
     description: "Vowels are 3 pts, consonants are 1 pt.",
     scoreFunction: vowelBonusScorer
   },
   {
     name: "Scrabble",
     description: "The traditional scoring algorithm.",
     scoreFunction: oldScrabbleScorer
   }
 ];

 //Finish writing scorerPrompt() so that the user can select which scoring algorithm to use when the program scores their word.
 function scorerPrompt() {
   console.log("Select a scoring algorithm:");
   for (let i = 0; i < scoringAlgorithms.length; i++) {
     console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
   }
 
   let userInput = input.question("Enter the number corresponding to your choice: ");
 
   while (isNaN(userInput) || userInput < 0 || userInput >= scoringAlgorithms.length) {
     console.log("Invalid input. Please enter a valid number.");
     userInput = input.question("Enter the number corresponding to your choice: ");
   }
 
   return scoringAlgorithms[userInput];
 }

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   let word = input.question("Let's play some scrabble! \n\n Enter a word to score: ");
   let selectedScorer = scorerPrompt();
   let score = selectedScorer.scoreFunction(word);
 
   console.log(`Score for '${word}': ${score}`);
 }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
