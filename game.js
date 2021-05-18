function Game() {
    let questionPool = new QuestionPool()
    let currentQuestion = questionPool.nextQuestion()
    let viewEngine = new ViewEngine()
    let point = 0
    this.getPoint = function () {
        return point
    }
    
    updateView()

    function updateView() {
        viewEngine.displayQuestion(currentQuestion)
        viewEngine.displayPoint(point)
        viewEngine.clearPreviousAnser()
        viewEngine.displayHint(currentQuestion.getHint())

    }

    this.checkAnswer = function () {
        let answerOfPlayer = document.getElementById("answer").value
        let isRightAnswer = (answerOfPlayer == currentQuestion.getAnswer())
        if (isRightAnswer) {
            point++
            currentQuestion = questionPool.nextQuestion()
            updateView()
        }
        else {
            alert("GAME OVER")
            currentQuestion = questionPool.nextQuestion()

        }
    }
}