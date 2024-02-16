const questionSection = document.getElementById('question-section');
const feedBack = document.getElementById('feedback');
const trueButton = document.getElementById('true');
const falseButton = document.getElementById('false');
// const startButton = document.getElementById('start');




export default class QuestionHub {
    questionBank = [
        "An atom is the smallest particle.",
        "Arachnophobia is the fear of bathing.",
        "Boiling water is 100 degrees Celsius.",
        "Butterflies taste things with their wings.",
        "Colorblind people can see color.",
        "Family Feud and Jeopardy are among the most-watched game shows of all time.",
        "Golf balls have 300 to 500 dimples.",
        "John Glenn was the oldest astronaut to travel in space.",
        "Lightning can’t strike in the same place twice.",
        "NFL teams are divided into three conferences.",
        // "Scotland’s national animal is a unicorn.",
        // "The record for the tallest human in the world is almost 9 feet tall.",
        // "The Statue of Liberty is the world’s tallest monument.",
        // "The sun is not a star.",
        // "Three strikes in a row in bowling is called an eagle.",
        // "A cheetah is the fastest animal on the planet.",
        // "A dog pants its tongue because it’s sweating.",
        // "An octopus has one heart.",
        // "Ants can hold up to 5,000 times their body weight.",
        // "Bats are blind.",
        // "Dinosaurs are the biggest animals to ever live.",
        // "Galapagos tortoises can go up to a year without water or food.",
        // "Herbivores eat animals.",
        // "Pigs roll in the mud because it helps to keep them cool.",
        // "Pufferfish are always edible.",
        // "Sharks are mammals.",
        // "Sloths take two weeks to digest food.",
        // "The blue whale is the biggest animal to have ever lived.",
        // "The ostrich egg is the world's smallest bird egg.",
        // "The process of creating honey involves bees’ waste.",
        // "Lions are more likely to hunt down a human than a tiger.",
        // "Apples and pears are a part of the rose family.",
        // "Cake is the most popular dessert.",
        // "Cauliflower is the only vegetable that’s also a flower.",
        // "Dark chocolate is actually good for you.",
        // "Drinking too much milk can cause health issues.",
        // "France is responsible for giving us French fries.",
        // "Grasshoppers are mainly eaten in the United States.",
        // "Grilled cheese is the most popular sandwich in the United States.",
        // "Ketchup was once used as a medicine.",
        // "Mushrooms are the most popular pizza topping in the U.S.",
        // "Red wine may be good for your heart.",
        // "Romaine is the best-known lettuce in the U.S.",
        // "Saffron is the most expensive spice in the world.",
        // "Soda is the most popular beverage on the planet.",
        // "Snails are safe to eat.",
        // "Strawberries are not actually berries.",
        // "Tomatoes are vegetables.",
        // "Yogurt was the first food that astronauts ate in space.",
        // "Boston hosted the first St. Patrick’s Day parade."
    ];

    answerBank = [false, false, true, false, true, true, true, true, false, false,
    ];

    index = 0;
    correctAnswer = 0;
    passMarkParcentage = (50 / 100) * 100;


    getQuestion() {

        if (this.index < this.questionBank.length) {
            const question = this.questionBank[this.index];
            questionSection.innerHTML = question;
        } else {

            questionSection.innerHTML = "End of quiz";


            let correctPercentage = (this.correctAnswer / this.questionBank.length * 100);
            feedBack.style.display = 'block'

            if (correctPercentage > this.passMarkParcentage) {

                feedBack.innerHTML = `<div style="color:green;"><h2>You have made it through the ${this.passMarkParcentage}% pass mark</h2>
                    <p>You got ${this.correctAnswer} out of ${this.questionBank.length} questions (${correctPercentage.toFixed(2)}%)</p></div>`


            }
            else {

                feedBack.innerHTML = `<div style="color:red;"><h2>Sorry you didn't make the ${this.passMarkParcentage}% pass mark</h2>
                <p>You got ${this.correctAnswer} out of ${this.questionBank.length} questions (${correctPercentage.toFixed(2)}%)</p></div>`
            }


            trueButton.disabled = true;
            falseButton.disabled = true;
            // startButton.style.display = 'block'
        }
    }
}




//  true, true, false, false, false, false, false, true, true, false,
//         false, true, true, false, true, false, true, true, true, true, false, false, true, true, false, false, true, true, true, false, true, false,
//         true, true, true, false, false, true, false, false, false, true, true, true, true, false