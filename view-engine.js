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
    
    function drawBoardGame() {
        let text = ""
        drawToolBar()
        drawQuestionBlock()
        drawCharacterBlock()
        drawAnswerBlock()



        function drawToolBar() {
            let image2 = new Image();
            image2.src = "home button.jpg";
            image2.onload = function () {
                ctx.drawImage(image2, 20, 10);
            };

            ctx.font = "25px Arial";
            ctx.fillText("LEVEL 1", 150, 30);

            ctx.font = "25px Arial";
            ctx.fillText("HINT", 300, 30);

            ctx.font = "25px Arial";
            ctx.fillText("POINT", 450, 30);

            ctx.font = "25px Arial";
            ctx.fillText("NEXT", 600, 30);
        }

        function drawQuestionBlock() {
            ctx.strokeRect(20, 100, 500, 350)
            ctx.stroke();
        }



        function drawCharacterBlock() {
            let charBlock1 = new CharacterBlocks(600, 100, 50, 50, c);
            let charBlock2 = new CharacterBlocks(600, 150, 50, 50, c);
            let charBlock3 = new CharacterBlocks(600, 200, 50, 50, c);
            let charBlock4 = new CharacterBlocks(600, 250, 50, 50, c);
            let charBlock5 = new CharacterBlocks(600, 300, 50, 50, c);
            let charBlock6 = new CharacterBlocks(600, 350, 50, 50, c);
            let charBlock7 = new CharacterBlocks(600, 400, 50, 50, c);
            let charBlock8 = new CharacterBlocks(700, 100, 50, 50, c);
            let charBlock9 = new CharacterBlocks(700, 150, 50, 50, c);
            let charBlock10 = new CharacterBlocks(700, 200, 50, 50, c);
            let charBlock11 = new CharacterBlocks(700, 250, 50, 50, c);
            let charBlock12 = new CharacterBlocks(700, 300, 50, 50, c);
            let charBlock13 = new CharacterBlocks(700, 350, 50, 50, c);
            let charBlock14 = new CharacterBlocks(700, 400, 50, 50, c);

            function CharacterBlocks(xP, yP, w, h, c) {
                this.xP = xP
                this.yP = yP
                this.w = w
                this.h = h
                this.c = selectCharacter(text)
                ctx.strokeRect(xP, yP, w, h, c)
                ctx.stroke();

                function selectCharacter() {
                    let charPool = ["a", "b", "c", "d", "e", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y"]
                    for (let i = 0; i < charPool.length; i++) {
                        text += charPool[i]
                    }
                    return text
                }
            }
        }

        function drawAnswerBlock() {
            ctx.strokeRect(20, 600, 500, 50)
            ctx.stroke();
        }
    }
}
