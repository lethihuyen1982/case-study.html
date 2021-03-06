function ViewEngine() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    
    drawBoardGame()
    
    this.displayQuestion = function (question) {
        ctx.clearRect(20, 100, 500, 350);
        let image = new Image();
        image.src = question.getPicture();
        image.onload = function () {
            ctx.drawImage(image, 50, 200);
        };
    }
    this.displayPoint = function(point) {
        document.getElementById("point").innerHTML = "POINT: " + point
    }
    this.hideHint = function(_hint) {
        document.getElementById("hint").innerHTML = "HINT  "
    }
    this.clearPreviousAnswer = function() {
        document.getElementById("answer").value = ""
    }
    
    this.displayHint = function(_hint) {
        document.getElementById("hint").innerHTML = "HINT:  " + _hint

    }
    this.displayScoreOfCurrentQuestion = function(_score) {
        document.getElementById("score").innerHTML = "SCORE OF CURRENT QUESTION: " + _score
    }
    this.displayLevel = function(level) {
        document.getElementById("level").innerHTML = "LEVEL: " + level
    }
    function drawBoardGame() {
            ctx.strokeRect(20, 100, 500, 350)
            ctx.stroke();
    }
}
