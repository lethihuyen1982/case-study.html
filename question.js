function Question (picture,answer,hint,score) {
    let _picture = picture
    let _answer = answer
    let _hint = hint
    let _score = score
    this.getPicture = function() {
        return _picture
    }
    this.getAnswer = function() {
        return _answer
    }
    this.getHint = function() {
        return _hint
    }
    this.getScore = function() {
        return _score
    }
}