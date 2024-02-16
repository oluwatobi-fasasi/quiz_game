

// const questionSection = document.getElementById('question-section');
const trueButton = document.getElementById('true');
const falseButton = document.getElementById('false');
// const feedBack = document.getElementById('feedback');

import QuestionHub from "./modules/question_bank"

let mymy = new QuestionHub();
// mymy.getQuestion();



// let index = 0;
// let correctAnswer = 0;
// let wrongAnswer = 0;
// let passMarkParcentage = (50 / 100) * 100;





// function displayQuestion() {
//     if (index < mymy.questionBank.length) {
//         const question = mymy.questionBank[index];
//         questionSection.innerHTML = question;
//     } else {

//         questionSection.innerHTML = "End of quiz";


//         let correctPercentage = (correctAnswer / mymy.questionBank.length * 100);
//         feedBack.style.display = 'block'

//         if (correctPercentage > passMarkParcentage) {

//             feedBack.innerHTML = `<div style="color:green;"><h2>You have made it through the ${passMarkParcentage}% pass mark</h2>
//             <p>You got ${correctAnswer} out of ${mymy.questionBank.length} questions (${correctPercentage.toFixed(2)}%)</p></div>`


//         }
//         else {

//             feedBack.innerHTML = `<div style="color:red;"><h2>Sorry you didn't make the ${passMarkParcentage}% pass mark</h2>
//         <p>You got ${correctAnswer} out of ${mymy.questionBank.length} questions (${correctPercentage.toFixed(2)}%)</p></div>`
//         }


//         trueButton.disabled = true;
//         falseButton.disabled = true;
//     }
// }



trueButton.addEventListener('click', () => {
    if (mymy.answerBank[mymy.index] === true) {
        console.log('correct');
        mymy.correctAnswer++;
    }
    // else {
    //     console.log('wrong');
    //     wrongAnswer++;
    // }
    mymy.index++;
    mymy.getQuestion();
});

falseButton.addEventListener('click', () => {
    if (mymy.answerBank[mymy.index] === false) {
        console.log('correct');
        mymy.correctAnswer++;
    }
    // else {
    //     console.log('wrong');
    //     wrongAnswer++;
    // }
    mymy.index++;
    mymy.getQuestion()
});


mymy.getQuestion()
