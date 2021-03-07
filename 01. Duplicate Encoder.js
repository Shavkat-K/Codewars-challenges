function duplicateEncode(word){
  let result = []
  lowerCaseWord = word.toLowerCase()
  for (let i = 0; i < lowerCaseWord.length; i++){
    let check = lowerCaseWord.replace(lowerCaseWord[i], '')
    check.includes(lowerCaseWord[i])? result.push(")"): result.push("(")
  }
  return result.join('')
}