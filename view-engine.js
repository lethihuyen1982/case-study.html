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
    this.clearPreviousAnser = function() {
        document.getElementById("answer").value = ""
    }
    this.displayHint = function(_hint) {
        document.getElementById("hint").innerHTML = "HINT: " + _hint
    }
    
    function drawBoardGame() {
            ctx.strokeRect(20, 100, 500, 350)
            ctx.stroke();
    }
}
