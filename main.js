let game = new Game()
let quiz = new Quiz()
let answer = new Answer()

let stages = []
let quizs_pool = []
let characters_pool = []
let answers = []

function Game() {
    this.playerName = "";
    this.stage = 0;
    this.score = 0;
    this.start = function () {
        console.log("Welcome " + this.playerName);
        console.log("Your current stage: " + this.stage);
        console.log("Your current score: " + this.score)
     }
    this.startQuiz = function () {
        let currentQuiz = quizs_pool.[Math.random()*quizs_pool.length]
     }
    this.displayAnswer = function () { }
    this.checkAnswer = function () {}
    this.getHint = function () { }
    this.changeQuiz = function () { }
    this.increaseScore = function () { }
    this.decreaseScore = function () { }
    this.nextStage = function () { }
    this.getOver = function () { }
}

function Quiz() {
    this.picture = "src"
    this.character = 

}

