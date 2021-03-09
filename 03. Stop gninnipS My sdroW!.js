function spinWords(text){
  let wordsArr = text.split(' ')
  let result = []
  wordsArr.forEach(word => word.length > 4? result.push(word.split('').reverse().join('')): result.push(word))
  return result.join(' ')
}