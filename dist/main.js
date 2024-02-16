/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_question_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/question_hub */ \"./modules/question_hub.js\");\n\nconst trueButton = document.getElementById('true');\nconst falseButton = document.getElementById('false');\n// const startButton = document.getElementById('start');\n\n\n\n\nlet mymy = new _modules_question_hub__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n\n\n\n\n\n\ntrueButton.addEventListener('click', () => {\n    if (mymy.answerBank[mymy.index] === true) {\n        // console.log('correct');\n        mymy.correctAnswer++;\n    }\n\n    mymy.index++;\n    mymy.getQuestion();\n});\n\nfalseButton.addEventListener('click', () => {\n    if (mymy.answerBank[mymy.index] === false) {\n        // console.log('correct');\n        mymy.correctAnswer++;\n    }\n\n    mymy.index++;\n    mymy.getQuestion()\n});\n\n// startButton.addEventListener('click', () => {\n//     mymy.getQuestion()\n// })\n\n\n\n\nmymy.getQuestion()\n\n\n//# sourceURL=webpack://colo/./index.js?");

/***/ }),

/***/ "./modules/question_hub.js":
/*!*********************************!*\
  !*** ./modules/question_hub.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuestionHub)\n/* harmony export */ });\nconst questionSection = document.getElementById('question-section');\nconst feedBack = document.getElementById('feedback');\nconst trueButton = document.getElementById('true');\nconst falseButton = document.getElementById('false');\n// const startButton = document.getElementById('start');\n\n\n\n\nclass QuestionHub {\n    questionBank = [\n        \"An atom is the smallest partic.\",\n        \"Arachnophobia is the fear of bathing.\",\n        \"Boiling water is 100 degrees Celsius.\",\n        \"Butterflies taste things with their wings.\",\n        \"Colorblind people can see color.\",\n        \"Family Feud and Jeopardy are among the most-watched game shows of all time.\",\n        \"Golf balls have 300 to 500 dimples.\",\n        \"John Glenn was the oldest astronaut to travel in space.\",\n        \"Lightning can’t strike in the same place twice.\",\n        \"NFL teams are divided into three conferences.\",\n        // \"Scotland’s national animal is a unicorn.\",\n        // \"The record for the tallest human in the world is almost 9 feet tall.\",\n        // \"The Statue of Liberty is the world’s tallest monument.\",\n        // \"The sun is not a star.\",\n        // \"Three strikes in a row in bowling is called an eagle.\",\n        // \"A cheetah is the fastest animal on the planet.\",\n        // \"A dog pants its tongue because it’s sweating.\",\n        // \"An octopus has one heart.\",\n        // \"Ants can hold up to 5,000 times their body weight.\",\n        // \"Bats are blind.\",\n        // \"Dinosaurs are the biggest animals to ever live.\",\n        // \"Galapagos tortoises can go up to a year without water or food.\",\n        // \"Herbivores eat animals.\",\n        // \"Pigs roll in the mud because it helps to keep them cool.\",\n        // \"Pufferfish are always edible.\",\n        // \"Sharks are mammals.\",\n        // \"Sloths take two weeks to digest food.\",\n        // \"The blue whale is the biggest animal to have ever lived.\",\n        // \"The ostrich egg is the world's smallest bird egg.\",\n        // \"The process of creating honey involves bees’ waste.\",\n        // \"Lions are more likely to hunt down a human than a tiger.\",\n        // \"Apples and pears are a part of the rose family.\",\n        // \"Cake is the most popular dessert.\",\n        // \"Cauliflower is the only vegetable that’s also a flower.\",\n        // \"Dark chocolate is actually good for you.\",\n        // \"Drinking too much milk can cause health issues.\",\n        // \"France is responsible for giving us French fries.\",\n        // \"Grasshoppers are mainly eaten in the United States.\",\n        // \"Grilled cheese is the most popular sandwich in the United States.\",\n        // \"Ketchup was once used as a medicine.\",\n        // \"Mushrooms are the most popular pizza topping in the U.S.\",\n        // \"Red wine may be good for your heart.\",\n        // \"Romaine is the best-known lettuce in the U.S.\",\n        // \"Saffron is the most expensive spice in the world.\",\n        // \"Soda is the most popular beverage on the planet.\",\n        // \"Snails are safe to eat.\",\n        // \"Strawberries are not actually berries.\",\n        // \"Tomatoes are vegetables.\",\n        // \"Yogurt was the first food that astronauts ate in space.\",\n        // \"Boston hosted the first St. Patrick’s Day parade.\"\n    ];\n\n    answerBank = [false, false, true, false, true, true, true, true, false, false,\n    ];\n\n    index = 0;\n    correctAnswer = 0;\n    passMarkParcentage = (50 / 100) * 100;\n\n\n    getQuestion() {\n\n        if (this.index < this.questionBank.length) {\n            const question = this.questionBank[this.index];\n            questionSection.innerHTML = question;\n        } else {\n\n            questionSection.innerHTML = \"End of quiz\";\n\n\n            let correctPercentage = (this.correctAnswer / this.questionBank.length * 100);\n            feedBack.style.display = 'block'\n\n            if (correctPercentage > this.passMarkParcentage) {\n\n                feedBack.innerHTML = `<div style=\"color:green;\"><h2>You have made it through the ${this.passMarkParcentage}% pass mark</h2>\n                    <p>You got ${this.correctAnswer} out of ${this.questionBank.length} questions (${correctPercentage.toFixed(2)}%)</p></div>`\n\n\n            }\n            else {\n\n                feedBack.innerHTML = `<div style=\"color:red;\"><h2>Sorry you didn't make the ${this.passMarkParcentage}% pass mark</h2>\n                <p>You got ${this.correctAnswer} out of ${this.questionBank.length} questions (${correctPercentage.toFixed(2)}%)</p></div>`\n            }\n\n\n            trueButton.disabled = true;\n            falseButton.disabled = true;\n            // startButton.style.display = 'block'\n        }\n    }\n}\n\n\n\n\n//  true, true, false, false, false, false, false, true, true, false,\n//         false, true, true, false, true, false, true, true, true, true, false, false, true, true, false, false, true, true, true, false, true, false,\n//         true, true, true, false, false, true, false, false, false, true, true, true, true, false\n\n//# sourceURL=webpack://colo/./modules/question_hub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;