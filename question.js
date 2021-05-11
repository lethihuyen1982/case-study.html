//let answerPool = ["khong khi","ba lo","dong vat","thong qua","nguyen nhan","dat nuoc","nghien cuu","mat troi","nhan dan","nha nuoc"]
function Question (picture,answer,hint) {
    let _picture = picture
    let _answer = answer
    let _hint = hint
    this.getPicture = function() {
        return _picture
    }
    this.getAnswer = function() {
        return _answer
    }
    this.getHint = function() {
        return _hint
    }
}