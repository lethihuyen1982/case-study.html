function QuestionPool () {
    let questionPool = [
        new Question ("Ques1.png","khong khi","khong noi"),
        new Question ("Ques2.png","ba lo","khong noi"),
        new Question ("Ques3.png","dong vat","khong noi"),
        new Question ("Ques4.png","thong qua","khong noi"),
        new Question ("Ques5.png","nguyen nhan","khong noi"),
        new Question ("Ques6.png","dat nuoc","khong noi"),
        new Question ("Ques7.png","nghien cuu","khong noi"),
        new Question ("Ques8.png","mat troi","khong noi"),
        new Question ("Ques9.png","nhan dan","khong noi"),
        new Question ("Ques10.png","nha nuoc","khong noi"),
    ]
    
    this.nextQuestion = function() {
        let randomIndex = Math.round(Math.random()*(questionPool.length-1))
        return questionPool[randomIndex]
    }
}