function forLoop(arr) {
  for(var i=0; i<25; i++) {
    arr = i === 1 
      ? [...arr, `I am ${i} strange loop.`] 
      : [...arr, `I am ${i} strange loops.`] 
  }
  return arr
}