function animate(callback,arr){
  let maxDiff = -1;
  let count = 0;
  arr.forEach(value => {
    let {
      start,end 
    } = value;
    let diff = end - start;
    if(diff > maxDiff){
      maxDiff = diff;
    }
  });

  function wrappedCallback(){
    callback(arr);
    
    count += 1;
    arr.forEach((v,i,a) => {
      a[i].start = a[i].start + 1;
    });
    console.log(count, maxDiff);
    if(count >= maxDiff) {
      window.cancelAnimationFrame(animationFrameHandler)
    } else {
      window.requestAnimationFrame(wrappedCallback);
    } 
  }
  const animationFrameHandler = window.requestAnimationFrame(wrappedCallback);
}

export { animate }