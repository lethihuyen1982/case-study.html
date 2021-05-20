function Game() {
    let questionPool = new QuestionPool()
    let currentQuestion = questionPool.nextQuestion()
    let viewEngine = new ViewEngine()
    let point = 0
    this.getPoint = function () {
        return point
    }
    this.getHint = function () {
        viewEngine.displayHint(currentQuestion.getHint())
    }
    updateView()

    function updateView() {
        viewEngine.displayQuestion(currentQuestion)
        viewEngine.displayScoreOfCurrentQuestion(currentQuestion.getScore())
        viewEngine.displayPoint(point)
        viewEngine.clearPreviousAnser()
        viewEngine.hideHint()

    }

    this.checkAnswer = function () {
        let answerOfPlayer = document.getElementById("answer").value
        let isRightAnswer = (answerOfPlayer == currentQuestion.getAnswer())
        if (isRightAnswer) {
            point = point + 10
            currentQuestion = questionPool.nextQuestion()
            updateView()
        }
        else {
            alert("GAME OVER")

        }
    }
}