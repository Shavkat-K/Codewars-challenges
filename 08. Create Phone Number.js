function createPhoneNumber(numbers){
  let resultStr = '('
  for (let i=0; i<numbers.length; i++){
    i === 3
      ? resultStr += ') '
      : i === 6
      ? resultStr += '-'
      : resultStr
    
    resultStr += numbers[i]
  }
  return resultStr
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])