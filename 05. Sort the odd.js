function sortArray(array) {
  let sortedOdds = array
    .filter(num => num % 2 !==0)
    .sort((a, b) => a-b)
  
  let sorted = array.map(num => {
    if(num % 2 !== 0) return null
    else return num
  })
  sortedOdds.forEach(num => {
    sorted[sorted.indexOf(null)] = num
  })
  return sorted
}