"use strict";

//The orignal
//let originalStory = 'In Philippines, computer pioneer Leirey found herself working on a Company. Word got out that the team had "debugged" the Entire Mistake';

//Empty array to add user input to it
let userInputs =[];





let numberOfQuestions = 5;
let question = "Enter a ";

let questionArray =[`${question} Place or Country..`,
`${question} a name..`,
`${question} place of work or Company..`,
`${question} a team name..`,
`${question} code problem name..`
];

// Question Counter (which question are we on)
let questionCounter = 0;

for(let i = numberOfQuestions; i > 0; i--){
    //console.log(i);

    //display in the console log if running correctly
    /*
    console.log(
        questionArray[questionCounter] + `....(${numberOfQuestions} questions leaf)`
        );
    numberOfQuestions--;
    */
    userInputs.push(
    prompt(
        questionArray[questionCounter] + `....(${numberOfQuestions} questions left)`
    )
        );
    numberOfQuestions--;
    questionCounter++;
}
alert("You are finish creating your story see it your self mr.Author...");

let originalStory = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}.
Word got out that the ${userInputs[3]} had "debugged" the Entire ${userInputs[4]}`;
console.log(originalStory);



















































