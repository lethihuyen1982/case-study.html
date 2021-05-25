function Game() {
    let questionPool = new QuestionPool()
    let currentQuestion = questionPool.nextQuestion()
    let viewEngine = new ViewEngine()
    let point = 0
    let level = 0
    let hintOpenned = true
    this.getPoint = function () {
        return point
    }
    this.getHint = function () {
        viewEngine.displayHint(currentQuestion.getHint())
        hintOpenned = true
    }

    updateView()

    function updateView() {
        viewEngine.displayQuestion(currentQuestion)
        viewEngine.displayScoreOfCurrentQuestion(currentQuestion.getScore())
        viewEngine.displayPoint(point)
        viewEngine.clearPreviousAnswer()
        viewEngine.hideHint()
        viewEngine.displayLevel(level)
        hintOpenned = false
    }

    this.checkAnswer = function () {
        let answerOfPlayer = document.getElementById("answer").value
        let isRightAnswer = (answerOfPlayer == currentQuestion.getAnswer())
        if (isRightAnswer) {
            increasePoint()
            increaseLevel()
           
        currentQuestion = questionPool.nextQuestion()
        updateView()
        }
        else {
            alert("GAME OVER")
        }
    }

    function increasePoint() {
        if (hintOpenned==true) {
            point = point + Number(currentQuestion.getScore()) / 2
        }
        else {
            point = point + Number(currentQuestion.getScore())
        }
    }

    function increaseLevel() {
        if (point <= 60) {
            level = 1
        }
        else if (point > 60 && point <= 120) {
            level = 2
        }
        else {
            level = 3
        }
    }
}