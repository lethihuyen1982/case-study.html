function QuestionPool () {
    let questionPool = [
        new Question ("Ques1.png","khong khi","k"),
        new Question ("Ques2.png","ba lo","b"),
        new Question ("Ques3.png","dong vat","d"),
        new Question ("Ques4.png","thong qua","t"),
        new Question ("Ques5.png","nguyen nhan","n"),
        new Question ("Ques6.png","dat nuoc","d"),
        new Question ("Ques7.png","nghien cuu","n"),
        new Question ("Ques8.png","mat troi","m"),
        new Question ("Ques9.png","nhan dan","n"),
        new Question ("Ques10.png","nha nuoc","n"),
    ]
    
    this.nextQuestion = function() {
        let randomIndex = Math.round(Math.random()*(questionPool.length-1))
        return questionPool[randomIndex]
    }
}