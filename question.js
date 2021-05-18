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