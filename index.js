
const trueButton = document.getElementById('true');
const falseButton = document.getElementById('false');
// const startButton = document.getElementById('start');


import QuestionHub from "./modules/question_hub"

let mymy = new QuestionHub();








trueButton.addEventListener('click', () => {
    if (mymy.answerBank[mymy.index] === true) {
        // console.log('correct');
        mymy.correctAnswer++;
    }

    mymy.index++;
    mymy.getQuestion();
});

falseButton.addEventListener('click', () => {
    if (mymy.answerBank[mymy.index] === false) {
        // console.log('correct');
        mymy.correctAnswer++;
    }

    mymy.index++;
    mymy.getQuestion()
});

// startButton.addEventListener('click', () => {
//     mymy.getQuestion()
// })




mymy.getQuestion()
