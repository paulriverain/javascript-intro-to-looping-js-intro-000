function forLoop(){
  const list= [];
    const t = 10
  for(let i = 0; i < t; i++){
    list.push(`I am ${i} strange loop.`)
  }
  return [list, t]
}
