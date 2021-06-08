const TITLES = [ 'The Big Bang Theory',
  'How I Met Your Mother',
  'Dexter',
  'Breaking Bad',
  'Doctor Who',
  'The Hobbit',
  'Pacific Rim',
  'Pulp Fiction',
  'The Avengers',
  'Shining' ]

// BEFORE
function search(searchTerm) {
  var search = new RegExp(searchTerm, 'gi');
  return TITLES.filter((title) => {
    let search = new RegExp(searchTerm, 'gi');
    return search.test(title)
  })
}

// AFTER
function search(searchTerm) {
  var search = new RegExp(searchTerm, 'gi');
  return TITLES.filter((title) => {
    let search = new RegExp(searchTerm, 'gi');
    return search.test(title)
  })
}

// Using test() on a regex with the "global" flag
// When a regex has the global flag set, test() will advance the lastIndex of the regex. (RegExp.prototype.exec() also advances the lastIndex property.)

// Further calls to test(str) will resume searching str starting from lastIndex. The lastIndex property will continue to increase each time test() returns true.