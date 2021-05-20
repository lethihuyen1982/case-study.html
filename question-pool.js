function QuestionPool () {
    let questionPool = [
        new Question ("Ques1.png","khong khi","k","20"),
        new Question ("Ques2.png","ba lo","b","10"),
        new Question ("Ques3.png","dong vat","d","30"),
        new Question ("Ques4.png","thong qua","t","30"),
        new Question ("Ques5.png","nguyen nhan","n","20"),
        new Question ("Ques6.png","dat nuoc","d","10"),
        new Question ("Ques7.png","nghien cuu","n","10"),
        new Question ("Ques8.png","mat troi","m","10"),
        new Question ("Ques9.png","nhan dan","n","20"),
        new Question ("Ques10.png","nha nuoc","n","20"),
    ]
    
    this.nextQuestion = function() {
        let randomIndex = Math.round(Math.random()*(questionPool.length-1))
        return questionPool[randomIndex]
    }
}