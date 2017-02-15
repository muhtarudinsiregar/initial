var initial = function (sentence) {
  if (!sentence) return false // handle sentence is undefined

  var splitSentence = sentence.split(' ')

  var firstChar = splitSentence[0].charAt(0) //get first character

  if (splitSentence.length === 1) {
    return firstChar
  }

  var lastChar = splitSentence.pop().charAt(0)  //get last character

  var initial = firstChar + lastChar

  return initial
}

module.exports = initial
