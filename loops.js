function forLoop(arr) {
  for(var i=0; i<25; i++) {
    arr = i === 1 
      ? [...arr, `I am ${i} strange loop.`] 
      : [...arr, `I am ${i} strange loops.`] 
  }
  return arr
}

function whileLoop(number) {
  while(number > 0) {
    console.log(number--);
  }
  return 'done'
}