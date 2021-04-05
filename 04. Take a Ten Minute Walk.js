function isValidWalk(walk) {
  if (walk.length === 10) {
    if (walk.includes('n') && walk.includes('s') && walk.includes('w') && walk.includes('e')){
      let n,s,w,e;
      for(let i = 0; i < walk.length; i++){
        switch (walk[i]){
          case 'n':
            n.push('n')
            break;
          case 's':
            s.push('s')
            break
          case 'w':
            w.push('w')
            break
          case 'e':
            e.push('e')
            break
        } 
      }
      console.log(n.length + ' ' + s.length + ' ' + w.length + ' ' + e.length)
      return n.length === s.length === w.length === e.length
    } else if (walk.includes('n') && walk.includes('s')) {
      let n = []
      let s = []
      for(let i = 0; i < walk.length; i++){
        walk[i] === 'n'? n.push(walk[i]): s.push(walk[i])
      }
      return n.length === s.length
    } else if(walk.includes('w') && walk.includes('e')) {
      let w = []
      let e = []
      for(let i = 0; i < walk.length; i++){
        walk[i] === 'w'? w.push(walk[i]): e.push(walk[i])
      }
      return w.length === e.length
    } 
  } 
  return false
}