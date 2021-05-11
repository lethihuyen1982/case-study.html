function QuestionPool () {
    let questionPool = [
        new Question ("Ques1.png","khong khi","khong noi")
    ]
    
    this.nextQuestion = function() {
        let randomIndex = Math.round(Math.random()*(questionPool.length-1))
        return questionPool[randomIndex]
    }
}