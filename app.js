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
/*for(let i = 0;i > numberOfQuestions; i++){
    if( userInputs[i] == ""){
        alert("Please provide valid input..");
        break;
    }else{
        alert("You are finish creating your story see it your self mr.Author...");

        let originalStory = `<p>In <i>${userInputs[0]}</i>, computer pioneer <strong>${userInputs[1]}</strong> found herself working on a <i>${userInputs[2]}</i>.</p>
        <p>Word got out that the <b>${userInputs[3]}</b> had "debugged" the Entire <i>${userInputs[4]}</i></p>`;
        console.log(originalStory);
        document.write(originalStory);
    }
}
for(let i = 0;i > 5; i++){
document.write(userInputs[i]);
}*/

        alert("You are finish creating your story see it your self mr.Author...");

        let originalStory = `<p>In <i>${userInputs[0]}</i>, computer pioneer <strong>${userInputs[1]}</strong> found herself working on a <i>${userInputs[2]}</i>.</p>
        <p>Word got out that the <b>${userInputs[3]}</b> had "debugged" the Entire <i>${userInputs[4]}</i></p>`;

        document.write(originalStory);

















































